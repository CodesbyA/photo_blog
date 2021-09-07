import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({setSelectedImage}) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                layout
                whileHover={{opacity: 1}}
                onClick={() => setSelectedImage(doc.url)}>

                    <motion.img src={doc.url} alt="Images in database" 
                    // initial={{opacity: .5}}
                    // animate={{opacity: 1}}
                    initial={{y: "-100vh"}}
                    animate={{y: 0}}
                    transition= {{delay: .5}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;