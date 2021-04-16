import React from 'react'
import {motion} from 'framer-motion'
import { projectFirestore} from '../firebase/config'

const collectionRef = projectFirestore.collection('images');
const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }
    }
    const deleteButtonHandler = () => {
        collectionRef.doc(selectedImg.id).delete();
        setSelectedImg(null);
    }
        return (
        <motion.div className='backdrop' onClick={handleClick}
            initial={{ opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.img src={selectedImg.url} alt="enlarged"
                initial = {{ y: "-100vh"}}
                animate = {{ y: 0 }}
            />
            <button className='btn' onClick={deleteButtonHandler}>Delete</button>     
        </motion.div>
    )
}
export default Modal