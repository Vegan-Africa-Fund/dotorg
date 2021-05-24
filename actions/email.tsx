import database from '../firebase/firebase';

const addEmail = (emailInfo: {id: string | null, email: string, ipAddress: string}) => ({
    type: 'ADD_EMAIL',
    emailInfo
})

export const addEmailToDB = (emailData: {email: string, ipAddress: string}) => {
    return (dispatch: any) => {
        database.ref('Veganafrica').push(emailData).then((ref) =>{
            dispatch(addEmail({
                id: ref.key,
                ...emailData
            }))
        })
    }
}

const fetchEmail = (emailData: [{id: string | null, email: string, ipAddress: string}]) => ({
    type: 'FETCH_EMAIL',
    emailData
})

export const getEmailfromDB = () => (
    (dispatch: any) => {
        return database.ref('Veganafrica').once('value').then((snapshot) => {
            const Emails: [{id: string | null, email: string, ipAddress: string}] = [{id: '', email: '', ipAddress: ''}]
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