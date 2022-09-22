import { useEffect, useState } from "react";
import QRCode from "qrcode";

const QRGenerator = ({ text }) => {
  const [qrCodeImage, setQrCodeImage] = useState("");

  useEffect(() => {
    QRCode.toDataURL(text).then((imageString) => {
      setQrCodeImage(imageString);
    });
  });

  return (
    <div>
      <img src={qrCodeImage} alt="QR Code" />
      <a href={qrCodeImage} download="qrcode.png">
        Download
      </a>
    </div>
  );
};

export default QRGenerator;
