import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, phone, company } = body;

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.EMAIL_TO || 'sales@wuxigreen.com',
      subject: `[Green Electric] New Inquiry: ${subject || 'General'} from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; margin-bottom: 20px;">Green Electric - 新客户询价</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #333;">客户信息</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>姓名:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>邮箱:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">
                  <a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>电话:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone || '未提供'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>公司:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${company || '未提供'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>主题:</strong></td>
                <td style="padding: 8px 0;">${subject || '未提供'}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">留言内容</h3>
            <div style="background: #fff; padding: 15px; border-left: 4px solid #059669; border-radius: 4px;">
              ${message}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p style="font-size: 12px; color: #888; margin: 0;">
            此邮件由 Green Electric 官网表单自动发送<br>
            发送时间: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 });

  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ message: "Failed to send email", error: String(error) }, { status: 500 });
  }
}
