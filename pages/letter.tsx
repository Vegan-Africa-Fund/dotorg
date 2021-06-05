import {Paper, Box} from '@material-ui/core'
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    underline: {
        textDecoration: "underline"
    }, 

    paper: {
        width: "60%",
        margin: "1.5rem auto",
        padding: "2.5rem 5rem",
        [theme.breakpoints.down('xs')] : {
            width: "100%",
            padding: "1rem 0.5rem"
        }
    },

    logo: {
        width: "100px",
        height: "100px"
    },
    smallMargin: {
        margin: "0 0.2rem"
    },

    signOut : {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
    },

    link: {
        textDecoration: "underline",
        cursor: "pointer",
        fontSize: "0.9rem",
        color: "#88a283"
    }
}))

const LetterPage = () => {
    const classes = useStyles();
    return (
        <section>
            <Paper className={classes.paper}>
            <Link href="/">
                    <h5 className={classes.link}>Go to Homepage</h5>
                </Link>
                <p>To all the Amazing Vegans in the World:</p>
                <p>Thank you for being exactly where you are right now. I’m grateful to you for choosing and sharing a kind, sustainable lifestyle. We all know that there is an imbalance between humans and nature that must be restored if our species and our planet are to thrive, and our actions are enabling a better world. Vegan everyday activism - eating plant-based and rejecting destructive animal agriculture - is helping to restore balance on earth.</p>
                <p>The Vegan Africa Fund wants to see Africa develop beautifully and sustainably instead of continuing down the problem path of destructive animal agriculture. There are long-standing traditions of veganism in many parts of Africa, and we seek to empower and spread the lifestyle. There is a local sustainability push that is being overpowered by corporations reinforcing the status quo. Right now, agriculture companies are tearing down the Congo Rainforest. Across the entire continent, multi-nationals are introducing and rapidly expanding factory farming, and promoting the lies that meat and dairy products are necessary and healthy parts of life. We seek to counteract this corrupt narrative while it’s in the early stages.</p>
                <p className={classes.underline}>Vegan AF is utilizing veganism as a preventative measure to solve some of the world’s greatest problems, and to create a more beautiful future world. Shifting to plant-based societies and reducing or eliminating the practices of breeding animals for slaughter will allow so much food to be diverted to human consumption that we can feed world hunger. Restoring and reforesting land that has been cut down for animal agriculture will enable us to fight climate change. Ending the cycles of suffering that we inflict on animals and the environment will, in turn, alleviate human suffering and elevate the consciousness of the entire species. </p>
                <p>Vegan AF is working to support vegan businesses operating on the ground in Africa to counter the evil corporate meat and greed game. VAF digital currency tokens are officially for sale, and purchasing VAFs enables you to grow the African vegan economy. VAFs will be redeemable at sustainable plant-based African businesses that Vegan AF partners with. Please get in touch with any questions or feedback, and let us know if you’re interested in advising our operations or otherwise getting involved. We’d love to make more vegans with you.</p>
                <Box className={classes.signOut}>
                    <p className={classes.smallMargin}>Love and Light,</p>
                    <p className={classes.smallMargin}>The Vegan Africa Fund Team</p>
                    <p className={classes.smallMargin}>4 June 2021</p>
                    <img className={classes.logo} alt="vegan" src="/images/veganLogo.png"/>   
                </Box>
            </Paper>
        </section>
    )
}

export default LetterPage