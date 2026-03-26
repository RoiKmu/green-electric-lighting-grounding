import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, phone, company } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'greenelectronic1688@gmail.com',
      subject: `[Saudi-Web] New Inquiry: ${subject || 'General'} from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #059669;">Green Electric - 新客户询价</h2>
          <p><strong>姓名:</strong> ${name}</p>
          <p><strong>邮箱:</strong> ${email}</p>
          <p><strong>电话:</strong> ${phone || '未提供'}</p>
          <p><strong>公司:</strong> ${company || '未提供'}</p>
          <p><strong>主题:</strong> ${subject || '未提供'}</p>
          <p><strong>内容:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message}
          </div>
          <hr />
          <p style="font-size: 12px; color: #888;">此邮件由 Green Electric 官网表单自动发送</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
