import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
    console.log('hello');
    const [content, setContent] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({ ...contentObj.data(), docID: contentObj.id }));
                setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);
    return { [target]: content };
}
