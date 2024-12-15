import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { email, nombre, token } = datos;

  await transport.sendMail({
    from: '"BienesRaices.com" <no-reply@bienesraices.com>',
    to: email,
    subject: 'Confirma tu cuenta en BienesRaices.com',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border-radius: 10px; overflow: hidden;">
        <!-- Encabezado con diseño actualizado -->
        <div style="background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%); color: white; text-align: center; padding: 30px 20px;">
          <img src="https://i.pinimg.com/736x/33/a7/cb/33a7cb809d86053807a6c4d33a378202.jpg" alt="BienesRaices.com" style="max-width: 120px; border-radius: 50%; margin-bottom: 10px;">
          <h1 style="margin: 0; font-size: 26px;">¡Confirma tu cuenta!</h1>
        </div>
        <!-- Cuerpo del mensaje -->
        <div style="padding: 20px; background-color: #f4f4f9;">
          <p style="font-size: 16px; color: #555;">Hola <strong>${nombre}</strong>,</p>
          <p style="font-size: 16px; color: #555;">Gracias por registrarte en <strong>BienesRaices.com</strong>. Para confirmar tu cuenta, haz clic en el botón de abajo:</p>
          <div style="text-align: center; margin: 20px 0;">
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3001}/auth/confirmar/${token}" style="background-color: #2575fc; color: white; padding: 12px 25px; text-decoration: none; font-size: 16px; border-radius: 5px; display: inline-block;">Confirmar cuenta</a>
          </div>
          <p style="font-size: 14px; color: #777;">Si tú no creaste esta cuenta, puedes ignorar este mensaje.</p>
        </div>
        <!-- Sección de firma y GIF -->
        <div style="padding: 20px; text-align: center; background-color: #ffffff;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSexkecEdHnTDzq7XkxIenvQhiVOHDI97UGkA&s" alt="Firma electrónica" style="max-width: 100px; margin-bottom: 10px;">
          <p style="font-size: 14px; color: #777;">Este correo incluye una firma electrónica válida de BienesRaices.com.</p>
          <img src="https://i.pinimg.com/originals/7d/07/a2/7d07a255678962d30d8717dcf5dbd266.gif" alt="Gracias por registrarte" style="max-width: 180px; margin-top: 10px;">
          <p style="font-size: 14px; color: #777;">¡Estamos emocionados de que formes parte de nuestra comunidad!</p>
        </div>
        <!-- Pie del email -->
        <div style="background-color: #f4f4f9; color: #666; text-align: center; padding: 15px;">
          <p style="margin: 0; font-size: 12px;">BienesRaices.com &copy; ${new Date().getFullYear()}</p>
        </div>
      </div>
    `,
  });
};

const emailOlvidePassword = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { email, nombre, token } = datos;

  await transport.sendMail({
    from: '"BienesRaices.com" <no-reply@bienesraices.com>',
    to: email,
    subject: 'Restablece tu contraseña en BienesRaices.com',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border-radius: 10px; overflow: hidden;">
        <!-- Encabezado con diseño actualizado -->
        <div style="background: linear-gradient(90deg, #ff758c 0%, #ff7eb3 100%); color: white; text-align: center; padding: 30px 20px;">
          <h1 style="margin: 0; font-size: 26px;">Restablece tu contraseña</h1>
        </div>
        <!-- Cuerpo del mensaje -->
        <div style="padding: 20px; background-color: #f4f4f9;">
          <p style="font-size: 16px; color: #555;">Hola <strong>${nombre}</strong>,</p>
          <p style="font-size: 16px; color: #555;">Has solicitado restablecer tu contraseña en <strong>BienesRaices.com</strong>. Para continuar, haz clic en el botón de abajo:</p>
          <div style="text-align: center; margin: 20px 0;">
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3001}/auth/olvide-password/${token}" style="background-color: #ff7eb3; color: white; padding: 12px 25px; text-decoration: none; font-size: 16px; border-radius: 5px; display: inline-block;">Restablecer contraseña</a>
          </div>
          <p style="font-size: 14px; color: #777;">Si tú no solicitaste este cambio, puedes ignorar este mensaje.</p>
        </div>
        <!-- Sección de GIF -->
        <div style="padding: 20px; text-align: center; background-color: #ffffff;">
          <img src="https://i.pinimg.com/originals/7d/07/a2/7d07a255678962d30d8717dcf5dbd266.gif" alt="Restablece tu contraseña" style="max-width: 180px; margin-bottom: 10px;">
          <p style="font-size: 14px; color: #777;">¡Te esperamos de vuelta pronto en BienesRaices.com!</p>
        </div>
        <!-- Pie del email -->
        <div style="background-color: #f4f4f9; color: #666; text-align: center; padding: 15px;">
          <p style="margin: 0; font-size: 12px;">BienesRaices.com &copy; ${new Date().getFullYear()}</p>
        </div>
      </div>
    `,
  });
};

export { emailRegistro, emailOlvidePassword };
