const formatter = Intl.NumberFormat('zh-Hans-CN', {
    style: 'currency',
    currency: 'CNY',
}).format

export default function formatMoney(cents) {
    return formatter(cents / 100)
}