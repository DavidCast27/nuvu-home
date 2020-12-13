export const formatCurrency = ({ value, fractionDigits = 0, local = 'es-CO', currency = 'COP' }) => {
    const formatted = new Intl.NumberFormat(local, {
        style: "currency",
        currency,
        minimumFractionDigits: fractionDigits
    }).format(value);
    return formatted;
};
