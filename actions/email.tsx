import database from '../firebase/firebase';

const addEmail = (emailInfo: {id: string | null, email: string}) => ({
    type: 'ADD_EMAIL',
    emailInfo
})

export const addEmailToDB = (emailData: {email: string}) => {
    return (dispatch: any) => {
        const {email} = emailData
        database.ref('Veganafrica').push(email).then((ref) =>{
            dispatch(addEmail({
                id: ref.key,
                email
            }))
        })
    }
}

const fetchEmail = (emailData: [{id: string | null, email: string}]) => ({
    type: 'FETCH_EMAIL',
    emailData
})

export const getEmailfromDB = () => (
    (dispatch: any) => {
        return database.ref('Veganafrica').once('value').then((snapshot) => {
            const Emails: [{id: string | null, email: string}] = [{id: '', email: ''}]
            snapshot.forEach((childSnapshot) => {
                Emails.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
                dispatch(fetchEmail(Emails))
            })
        })
    }
)