import { motion } from "framer-motion";
import starImg from "@/assets/star-sticker.png";
import hotelExterior from "@/assets/hotel-exterior.jpeg";
import hotelReception from "@/assets/hotel-reception.jpeg";
import hotelRose from "@/assets/hotel-rose-suite.jpeg";
import hotelFloss from "@/assets/hotel-floss-apartment.jpeg";
import hotelMarigold from "@/assets/hotel-marigold-suite.jpeg";
import hotelOleander from "@/assets/hotel-oleander-penthouse.jpeg";
import hotelJasmine from "@/assets/hotel-jasmine-apartment.jpeg";
import travellerExterior from "@/assets/traveller-exterior.jpeg";
import travellerInterior from "@/assets/traveller-interior.jpeg";

const hotelPhotos = [
  { src: hotelExterior, label: "Almost Heaven — Exterior", rotate: "-1deg" },
  { src: hotelReception, label: "Warm Welcome", rotate: "1deg" },
  { src: hotelRose, label: "Rose Suite", rotate: "-2deg" },
  { src: hotelFloss, label: "Floss Apartment", rotate: "1.5deg" },
  { src: hotelMarigold, label: "Marigold Suite", rotate: "-1deg" },
  { src: hotelOleander, label: "Oleander Penthouse", rotate: "2deg" },
  { src: hotelJasmine, label: "Jasmine Apartment", rotate: "-1.5deg" },
];

const transportPhotos = [
  { src: travellerExterior, label: "Luxury Tempo Traveller", rotate: "1deg" },
  { src: travellerInterior, label: "Push-back Seats & AC Interior", rotate: "-1deg" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="relative z-10 px-6 py-[15vh] max-w-6xl mx-auto">
      {/* Transport */}
      <motion.div
        className="flex flex-col items-center text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={starImg} alt="" className="sticker-img w-20 md:w-28 mb-4" />
        <h2 className="font-display text-4xl md:text-6xl text-primary glow-text">your ride</h2>
        <p className="font-body text-foreground mt-3 max-w-xl font-semibold">
          luxury AC tempo traveller with push-back seats, charging ports & ample luggage space
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {transportPhotos.map((photo, i) => (
          <motion.div
            key={i}
            className="sticker-card !p-3 overflow-hidden"
            style={{ rotate: photo.rotate }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotate: "0deg", scale: 1.02 }}
            transition={{ delay: i * 0.1 }}
          >
            <img src={photo.src} alt={photo.label} className="w-full h-56 md:h-72 object-cover rounded-xl" />
            <p className="font-display text-lg text-primary mt-3 text-center">{photo.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Hotel */}
      <motion.div
        className="flex flex-col items-center text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={starImg} alt="" className="sticker-img w-20 md:w-28 mb-4" />
        <h2 className="font-display text-4xl md:text-6xl text-primary glow-text">your stay</h2>
        <p className="font-body text-foreground mt-3 max-w-xl font-semibold">
          <a href="https://www.almostheaven.co.in/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-secondary transition-colors">
            Almost Heaven
          </a>{" "}
          — near mall road, mussoorie
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotelPhotos.map((photo, i) => (
          <motion.div
            key={i}
            className="sticker-card !p-3 overflow-hidden"
            style={{ rotate: photo.rotate }}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            whileHover={{ rotate: "0deg", scale: 1.03 }}
            transition={{ delay: i * 0.06 }}
          >
            <img src={photo.src} alt={photo.label} className="w-full h-48 md:h-56 object-cover rounded-xl" />
            <p className="font-display text-base text-primary mt-3 text-center">{photo.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
