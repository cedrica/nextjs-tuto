const Card = ({ children }: { children: React.ReactNode }) => {
    const style = {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
    return <div style={style}>{children}</div>;
}

export default Card;