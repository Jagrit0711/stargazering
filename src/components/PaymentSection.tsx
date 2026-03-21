import { motion } from "framer-motion";
import starImg from "@/assets/star-sticker.png";
import upiQrImg from "@/assets/upi-qr.png";

const PaymentSection = () => {
  return (
    <section id="payment" className="relative z-10 py-[15vh] px-6 max-w-4xl mx-auto">
      <motion.div
        className="flex flex-col items-center text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={starImg} alt="" className="sticker-img w-20 md:w-28 mb-4" />
        <h2 className="font-display text-4xl md:text-6xl text-primary glow-text">payment</h2>
        <p className="font-body text-foreground mt-4 max-w-xl font-semibold">
          total fee: <span className="text-primary glow-text text-2xl">₹8,200</span> per person (all inclusive, zero profit)
        </p>
      </motion.div>

      {/* WhatsApp notice */}
      <motion.div
        className="sticker-card max-w-2xl mx-auto mb-10 text-center"
        style={{ rotate: "-1deg" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ rotate: "0deg", scale: 1.02 }}
      >
        <img src={starImg} alt="" className="sticker-img w-10 mx-auto -mt-10 mb-3" />
        <h3 className="font-display text-2xl md:text-3xl text-primary mb-3">before paying</h3>
        <p className="font-body text-foreground font-medium text-base md:text-lg">
          please inform on whatsapp at{" "}
          <a href="https://wa.me/918851844602" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-secondary transition-colors font-bold">
            8851844602
          </a>{" "}
          before making the payment
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* UPI QR */}
        <motion.div
          className="sticker-card flex flex-col items-center"
          style={{ rotate: "1deg" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ rotate: "0deg", scale: 1.02 }}
        >
          <img src={starImg} alt="" className="sticker-img w-8 -mt-8 mb-2" />
          <h3 className="font-display text-2xl text-primary mb-4">upi payment</h3>
          <img src={upiQrImg} alt="UPI QR Code - Scan to pay" className="w-48 md:w-56 rounded-xl mb-3" />
          <p className="font-body text-sm text-foreground/70">scan & pay via any UPI app</p>
          <p className="font-body text-xs text-foreground/50 mt-1">UPI ID: 9599775636-1@okbizaxis</p>
        </motion.div>

        {/* Bank details */}
        <motion.div
          className="sticker-card flex flex-col items-center"
          style={{ rotate: "-1deg" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ rotate: "0deg", scale: 1.02 }}
          transition={{ delay: 0.1 }}
        >
          <img src={starImg} alt="" className="sticker-img w-8 -mt-8 mb-2" />
          <h3 className="font-display text-2xl text-primary mb-4">bank transfer</h3>
          <div className="space-y-3 text-left w-full">
            <p className="font-body text-foreground/60 text-xs uppercase tracking-wider">SBI Company Account</p>
            {[
              { label: "Name", value: "SHIVAYA TOURS AND TRAVELS" },
              { label: "A/C No.", value: "41710261799" },
              { label: "IFSC Code", value: "SBIN0021223" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="font-body text-xs text-foreground/50">{item.label}</span>
                <span className="font-display text-lg text-foreground font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentSection;
