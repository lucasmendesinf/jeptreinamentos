<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Metodo nao permitido.']);
    exit;
}

$raw = file_get_contents('php://input');
$payload = json_decode($raw ?: '', true);

if (!is_array($payload)) {
    $payload = $_POST;
}

function response_json(int $status, string $message): void
{
    http_response_code($status);
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function clean_field(array $payload, string $key, int $maxLength = 1000): string
{
    $value = isset($payload[$key]) ? (string) $payload[$key] : '';
    $value = trim(strip_tags($value));
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    return mb_substr($value, 0, $maxLength, 'UTF-8');
}

$honeypot = clean_field($payload, 'website', 120);
if ($honeypot !== '') {
    response_json(422, 'Envio bloqueado.');
}

$name = clean_field($payload, 'name', 120);
$email = clean_field($payload, 'email', 180);
$phone = clean_field($payload, 'phone', 40);
$service = clean_field($payload, 'service', 180);
$message = clean_field($payload, 'message', 3000);

if (mb_strlen($name, 'UTF-8') < 3) {
    response_json(422, 'Informe seu nome completo.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    response_json(422, 'Informe um e-mail valido.');
}

if (strlen(preg_replace('/\D/', '', $phone)) < 10) {
    response_json(422, 'Informe um telefone com DDD.');
}

if ($service === '') {
    response_json(422, 'Selecione um assunto.');
}

if (mb_strlen($message, 'UTF-8') < 10) {
    response_json(422, 'Descreva brevemente sua necessidade.');
}

$to = 'contato@jeptreinamentos.com.br';
$subjectService = mb_substr($service, 0, 80, 'UTF-8');
$subject = 'Contato pelo site - ' . $subjectService;

$body = implode("\n", [
    'Nova mensagem enviada pelo site J&P Treinamentos',
    '',
    'Nome: ' . $name,
    'E-mail: ' . $email,
    'Telefone: ' . $phone,
    'Assunto: ' . $service,
    '',
    'Mensagem:',
    $message,
    '',
    'Enviado em: ' . date('d/m/Y H:i:s'),
]);

$safeName = str_replace(["\r", "\n", '"'], ' ', $name);
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: J&P Treinamentos <contato@jeptreinamentos.com.br>',
    'Reply-To: "' . $safeName . '" <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    response_json(500, 'Nao foi possivel enviar a mensagem agora. Tente novamente ou entre em contato pelo e-mail contato@jeptreinamentos.com.br.');
}

response_json(200, 'Mensagem enviada com sucesso. Em breve retornaremos o contato.');
