export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h1 style={{ fontSize: '5rem' }}>404</h1>
            <p>Страница не найдена</p>
        </div>
    );
}
