'use client';

import { motion } from 'framer-motion';

function CollectionBigImg({ bigShowImg }: { bigShowImg: string }) {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      src={bigShowImg}
      alt="Shoe collection"
      loading="lazy"
      className="object-contain"
    />
  );
}

export default CollectionBigImg;
