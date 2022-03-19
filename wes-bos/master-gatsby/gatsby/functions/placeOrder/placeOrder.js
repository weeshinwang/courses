const nodemailer = require('nodemailer')

function generateOrderEmail({ order, total}) {
    return (
        `
        <div>
            <h2>Your Recent Order for ${total}</h2>
            <p>please start walking over, we will have your order ready for next 20 mins</p>
            <ul>
                ${order.map(item => `<li>
                    <img src="${item.thumbnail}" alt="${item.name}" />
                    ${item.size} ${item.name} - ${item.price}
                </li>`).join('')}
            </ul>
            <p>Your total is <strong>${total}</strong></p>
            <style>
                ul {
                    list-style: none;
                }
            
            </style>
        </div>
        `
    )
}

// create a transport for nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});


function wait(ms = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

exports.handler = async (event, context) => {
    await wait(1000)



    const body = JSON.parse(event.body)

    if(body.sugarcane) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: '🤖🤖🤖 机器人请走开！'
            })
        }
    }

    const chinese = {
        email: '邮箱',
        name: '姓名',
        order: '订单'
    }

    // validate the data
    const requiredFields = ['name', 'email']

    for (const field of requiredFields) {
        if(!body[field]) {
            return {
                statusCode: 400,
                body: JSON.stringify(
                    {message: `🤔您似乎忘记填写姓名(或/和)邮箱信息`}
                )
            }
        }
    }

    // make sure you actually have orders
    if(!body.order.length) {
        return {
            statusCode: 400,
            body: JSON.stringify(
                {message: '🥲为什么不选择一些美味的披萨呢？'}
            )
        }
    }
    // send email

    // send the sucess or error message

    const info = await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: `${body.name} <${body.email}>`,
        subject: '订单确认函！',
        html: generateOrderEmail({order: body.order, total: body.total}),
    });

    console.log(info);

    return {
        statusCode: 200,
        body: JSON.stringify({message: '成功下单！订单确认函已发送至您的邮箱。'})
    }
}