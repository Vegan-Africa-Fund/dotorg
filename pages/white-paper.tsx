import {Paper, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Head from 'next/head';

const useStyles = makeStyles(theme => ({
    firstPaper: {
        width: "60%",
        margin: "1.5rem auto",
        padding: "3rem 6rem 6rem 6rem",
        [theme.breakpoints.down('xs')] : {
            width: "100%",
            padding: "2rem"
        }
    },
    paper: {
        width: "60%",
        margin: "1.5rem auto",
        padding: "6rem",
        [theme.breakpoints.down('xs')] : {
            width: "100%",
            padding: "2rem"
        }
    },

    section: {
        '& h3:first-of-type' : {
            fontFamily: "JosefinSansBold",
            color: "#88a283",
            textAlign: "center"
        },
        '& p': {
            fontFamily: "JosefinSansLight",
            fontSize: "1rem",
            fontWeight: "500"
        },

        '& h2': {
            textAlign: "center"
        }
    },

    footer: {
        position: "relative",
        top: "4rem",
        display: "flex",
        justifyContent: "flex-end",
        fontFamily: "JosefinSansBold",
        [theme.breakpoints.down('xs')] : {
            top: "2rem"
        }
    },

    span: {
        color: "#88a283",
        textDecoration: "underline"
    },

    dt: {
        '& p': {
            marginBottom: "0.4rem"
        }
    },

    dd: {
        '& p' : {
            margin: "0 0.4rem"
        }
    },

    caption: {
        fontFamily: "JosefinSansBold",
        color: "#88a283",
        textAlign: "center"
    },

    link: {
        textDecoration: "underline",
        cursor: "pointer",
        fontSize: "0.9rem",
        color: "#88a283"
    },

    topImage: {
        width: "700px",
        height: "auto",
        [theme.breakpoints.down('xs')] : {
            width: "300px"
        }
    },

    imageDimensions: {
            width: "620px",
            height: "auto",
        [theme.breakpoints.down('xs')] : {
            width: "300px",
        }
    },

    logo: {
        width: "80px",
        height: "80px",
        cursor: "pointer"
    }

}))


const WhitePaper = () => {
    const classes = useStyles();
    return (
        <>
        <Head>
         <title>White Paper | Vegan AF</title>
         <meta charSet="utf-8" />
         <link rel="shortcut icon" href="/images/veganLogo.ico" sizes="144x144"/>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <section className={classes.section}>
            <Paper className={classes.firstPaper}>
                <Box display="flex" justifyContent="center">
                    <Link href="/">
                        <img alt="vegan" className={classes.logo} src="/images/veganTextLogo.png" />
                    </Link>
                </Box>
                <Box  display="flex" justifyContent="center">
                <img alt="whitepaper" className={classes.topImage} src="/images/whitepaper.png" />
                </Box>
            </Paper>
            <Paper className={classes.paper}>
                <h3>Tokenomics Summary</h3>
                <p>
                The Vegan Africa Fund (Vegan AF) is sustainably scaling plant-based businesses in a decentralized manner. VAF is the native token of the Vegan AF network, serving as an impact token enabling co-operation of vegan individuals and businesses through the VAF token economy. Purchasing VAFs allows Vegan AF to strategically acquire, hold, assist, and form companies aligned with our mission. Vegan AF acts as a vegan impact fund, with operations focused on helping vegan companies succeed. For every 10 VAFs purchased, 1 VAF will be distributed to the Community Development Fund or as part of the Vegan AF rewards program. As the Vegan AF network expands, VAF tokens can be redeemed for goods and services from partnered operations. The VAF token provides proof of impact, where the token usage can be tied to sustainable operations in Africa and our increasing market share in the growing value of the vegan economy. VAF tokens will grow in value as the companies Vegan AF supports grow in value. Our mission is to make plant-based options plentiful, delicious, local, and sustainable, while making the plant-based evolution accessible to the fastest-growing continent on Earth. 
                </p>
                <Box display="flex" justifyContent="center">
                <img alt="whitepaper" className={classes.imageDimensions} src="/images/whitepaper_2.png" />
                </Box>
                <h4 className={classes.footer}>1</h4>
            </Paper>
            <Paper className={classes.paper}>
                <h2>INTRODUCTION</h2>
                <p>Complete ecological breakdown is the greatest threat to humanity, and it’s happening in front of our eyes. Destructive industrialization and dependence on livestock agriculture have caused severe environmental damage, and these harmful practices are rapidly expanding in Africa <span className={classes.span}><a href="https://www.dropbox.com/sh/yd8l2v0u4jqptp3/AACpraYjOYWpTxAFv5H-2vrKa/1%20Global%20Assessment%20Summary%20for%20Policymakers?dl=0&preview=Summary+for+Policymakers+IPBES+Global+Assessment.pdf&subfolder_nav_tracking=1">(Diaz, Setelle, Brondizio, et al.)</a></span>.
                Humans must move forward on the solution path by rejecting the problem path and abandoning harmful practices. The greatest impact will come from massive societal shifts towards sustainability, and adopting a plant-based diet is shown to be the most impactful action the average  individual can take to fight climate change <span className={classes.span}><a href="https://www.ipcc.ch/site/assets/uploads/sites/2/2019/06/SR15_Full_Report_High_Res.pdf">(IPCC)</a></span>.Vegan AF seeks to make this lifestyle shift accessible to anyone who wishes to adopt it on the African continent.</p>
                <p>The African population is projected to nearly quadruple from 1.2 billion today to over 4 billion in the next century <span className={classes.span}><a href="https://www.worldbank.org/en/region/afr/overview">(World Bank)</a></span>.
                That's a lot more people to feed; in fact, Africa is growing faster than any other continent. How we increase food production must be rooted in regeneration instead of destruction, especially encouraging food forests to regenerate the earth.
                </p>
                <Box display="flex" justifyContent="center">
                    <img alt="whitepaper" className={classes.imageDimensions} src="/images/whitepaper_3.png" />
                </Box>
                <Box textAlign="center">
                <h4 className={classes.span}><a href="https://ourworldindata.org/future-population-growth">Current Population Vs. Projected Population By Continent</a></h4>
                </Box>
                <h4 className={classes.footer}>2</h4>
            </Paper>
            <Paper className={classes.paper}>
            <h2>INTRODUCTION</h2>
            <p>
                Rainforests in Congo and throughout Africa are being slashed for industrial and agricultural expansion. Animal agriculture is largely responsible for the rapid depletion of resources that could otherwise be used to end world hunger <span className={classes.span}><a href="https://www.cifor.org/publications/pdf_files/OccPapers/OP-144.pdf">(Tchatchou et. al)</a></span>.
            </p>
            <Box display="flex" justifyContent="center">
                <img alt="whitepaper" className={classes.imageDimensions} src="/images/whitepaper_4.png" />
            </Box>
            <Box textAlign="center">
            <h4 className={classes.span}><a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/65505/6316-drivers-deforestation-report.pdf">Causes of Deforestation in the Congo Rainforest</a></h4>
            </Box>
            <p>Humanity currently lacks the collective will, cooperation, and institutional structures to dramatically shift our lifestyles for the better. On a continent where more than half of the population is children or young adults <span className={classes.span}><a href="https://data.unicef.org/wp-content/uploads/2019/01/Children-in-Africa.pdf">(UNICEF)</a></span>, Vegan AF is shaping the future by empowering the youth to follow the solution path of adopting a vegan diet. </p>
            <p>Vegan AF is enabling an increasingly plant-based world, where the majority of soy and grain crops are shifted to feeding humans instead of livestock <span className={classes.span}><a href="https://www.usda.gov/sites/default/files/documents/coexistence-soybeans-factsheet.pdf">(USDA)</a></span>.
            At the same time as people are going hungry, a large proportion of edible calories are feeding bred animals, which yields a much lower caloric value for human consumption compared to eating the crops themselves <span className={classes.span}><a href="https://iopscience.iop.org/article/10.1088/1748-9326/8/3/034015/pdf">(Cassidy et. al)</a></span>.
            A focus on reduction in consumed animals will allow for enough resources to support a healthy diet and a life free from poverty for every human on the planet, regardless of population growth <span className={classes.span}><a href="https://www.onegreenplanet.org/environment/world-hunger-population-growth-ditching-meat/">(One Green Planet)</a></span>.</p>
            <p>Veganism, historically, has been a technique adopted by concerned individuals doing their part to act ethically, improve health, and solve environmental issues. Vegan AF is utilizing veganism as a preventative approach to some of the world’s greatest challenges, and to restore the balance between human and nature.</p>
            <h4 className={classes.footer}>3</h4>
            </Paper>
            <Paper className={classes.paper}>
                <h2>TOKENOMICS</h2>
                <p>VAF is the capped supply impact token of the Vegan AF network. VAF tokens are created during the network’s genesis transaction, at a fixed amount of 1 trillion VAF. Following the network’s inception, there are no mining activities associated with the Vegan AF network. Vegan AF applications have the ability to support additional types of tokens, although they are not considered VAF tokens and do not impact VAF token supply and demand.</p>
                <p>VAF tokens will be accepted and used through the Vegan AF network and by Vegan AF businesses, showing how much impact a tokenized vegan economy can have for the world. The token value will increase as Vegan AF operations expand and the businesses we partner with become successful and profitable.</p>
                <p>Vegan AF invests in plant-based African companies. The purchase of VAF tokens provides critical expansion and start-up capital to vegan and sustainable businesses in Africa. In exchange, Vegan AF obtains market shares in these companies. As these companies grow in value, so will Vegan AF. We will provide tokenization services for each business we support, whereby Vegan AF will obtain a corresponding percent of tokens as market shares, which can be purchased back by the business owner after growth thresholds are met, with interest. This will ensure that successful businesses provide an appreciation to Vegan AF. When businesses pay us back, we’ll use that repayment to continue investing in sustainable entrepreneurship.</p>
                <p>Every business we work with will have an incentive to accept VAF from their customers. VAF tokens can be used to trade with merchants in the Vegan AF network, where products offered are not necessarily food products but also sustainably-produced products and services. For companies Vegan AF supports, a portion of share buy-backs will be allowed through paying Vegan AF back in VAF. Vegan AF will incentivize engagement in veganism through VAF distribution at educational events, through digital platforms, and to businesses or individuals we partner with as part of the Community Development Fund.  This model will increase the VAF network usage, allowing Vegan AF and the VAF token value to grow.</p>
                <p>VAF tokens will be released with the following allocations: public sale, community development fund, development team, liquidity pool, and presale.</p>
                <h4 className={classes.footer}>4</h4>
            </Paper>
            <Paper className={classes.paper}>
                <h2>TOKEN DISTRIBUTION</h2>
                <Box display="flex" justifyContent="center">
                    <img alt="whitepaper" className={classes.imageDimensions} src="/images/whitepaper_5.png" />
                </Box>
                <h4 className={classes.caption}>VAF Token Allocation</h4>
                <dl>
                    <dt className={classes.dt}>
                        <p>Presale:</p>
                    </dt>
                    <dd className={classes.dd}>
                        <Box display="flex">
                            <p>-</p>
                            <p>Tokens sold before launch on any DEX (Decentralized Exchange) exclusively to early investors, 5% of total VAF supply</p>
                        </Box>
                    </dd>
                    <dt className={classes.dt}>
                        <p>Public sale:</p>
                    </dt>
                    <dd className={classes.dd}>
                        <Box display="flex">
                            <p>-</p>
                            <p>Exchange launch every quarter for 4 years, unlocking less VAF per launch as time goes by, 70% of total VAF supply</p>
                        </Box>
                    </dd>
                    <dt className={classes.dt}>
                        <p>Community Development Fund (CDF): </p>
                    </dt>
                    <dd className={classes.dd}>
                        <Box display="flex">
                            <p>-</p>
                            <p>For every 10 VAFs purchased, 1 VAF will unlock in the Community Development Fund</p>
                        </Box>
                    </dd>
                    <dd className={classes.dd}>
                        <Box display="flex">
                            <p>-</p>
                            <p>VAFs are allocated to vegan businesses or individuals who will help the Vegan AF network grow, 8.5% of total VAF supply</p>
                        </Box>
                    </dd>
                    <dt className={classes.dt}>
                        <p>Development team:</p>
                    </dt>
                    <dd className={classes.dd}>
                        <Box display="flex">
                            <p>-</p>
                            <p>A portion of VAF tokens is unlocked every quarter and distributed to the Vegan AF development team, 6.5% of total VAF supply</p>
                        </Box>
                    </dd>
                    <dt className={classes.dt}>
                        <p>Liquidity pool:</p>
                    </dt>
                    <dd className={classes.dd}>
                        <Box display="flex">
                            <p>-</p>
                            <p>Vegan AF reserves a portion of VAF tokens to sell on exchanges if there is a higher demand than available tokens during that sale stage, 10% of total VAF supply</p>
                        </Box>
                    </dd>
                </dl>
                <h4 className={classes.footer}>5</h4>
            </Paper>
            <Paper className={classes.paper}>
            <h2>TOKEN DISTRIBUTION</h2>
            <p>The schedule of unlocking dates for each of these sections outlined in the Roadmap below.</p>
            <Box display="flex" justifyContent="center">
                    <img alt="whitepaper" className={classes.imageDimensions} src="/images/whitepaper_6.jpg" />
            </Box>
            <h4 className={classes.caption}>Roadmap for Token Distribution</h4>
            <h4 className={classes.footer}>6</h4>
            </Paper>
            <Paper className={classes.paper}>
            <h2>DECENTRALIZED AUTONOMOUS ORGANIZATION (DAO)</h2>
            <dl>
                <dt>
                    <p>The Vegan AF operations will be directed by the Development Team until 75% of the total VAF supply is unlocked, or 750 billion tokens. The projected unlock date for this amount will be Q3 2023, as shown in the roadmap above. At this time, key decision-making will be turned over to the DAO, where VAF holders receive proportional votes to the number of VAF they hold. The DAO will have the ability to vote on the following:</p>
                </dt>
                <dd className={classes.dd}>
                    <Box display="flex">
                        <p>-</p>
                        <p>Which projects receive what proportion of funding allocated</p>
                    </Box>
                </dd>
                <dd className={classes.dd}>
                    <Box display="flex">
                        <p>-</p>
                        <p>What projects to accept into Vegan AF incubation</p>
                    </Box>
                </dd>
                <dd className={classes.dd}>
                    <Box display="flex">
                        <p>-</p>
                        <p>What applications to focus on developing</p>
                    </Box>
                </dd>
                <dd className={classes.dd}>
                    <Box display="flex">
                        <p>-</p>
                        <p>Additional strategic moves</p>
                    </Box>
                </dd>
            </dl>
            <h2>OPERATIONS STRATEGY</h2>
            <p>As the vegan economy grows in Africa, Vegan AF will be at the forefront. Funds raised through the VAF token pre-sale and public sale will be allocated to the following funds: Partnership and Strategic Acquisitions Fund, Technical and Platform Engineering Fund, Research and Development, Operations, Marketing, Social Impact Initiatives, and Legal. Investments made by Vegan AF into African businesses will result in Vegan AF acquiring shares of those companies, making up the Vegan AF portfolio. The investments will come with an option to purchase shares back at a later date, at an increased price. Share buyback funds will go back into the Vegan AF funds pool to support further investments in Vegan AF businesses.
            </p>
            <Box display="flex" justifyContent="center">
                <img alt="whitepaper" className={classes.imageDimensions} src="/images/whitepaper_7.png" />
            </Box>
            <h4 className={classes.caption}>Vegan AF Funds Distribution</h4>
            <h4 className={classes.footer}>7</h4>
            </Paper>
            <Paper className={classes.paper}>
            <h2>OPERATIONS STRATEGY</h2>
            <p>
                The Partnership and Strategic Acquisitions Fund makes up the largest portion of the funds allocated from VAF sales. The fund includes support for high-growth operations as well as projects Vegan AF believes we can turn into high-growth operations.
            </p>
            <Box display="flex" justifyContent="center">
                <img alt="whitepaper" className={classes.imageDimensions} src="/images/whitepaper_8.png" />
            </Box>
            <Box display="flex" justifyContent="center">
                <img alt="whitepaper" className={classes.imageDimensions} src="/images/whitepaper_9.png" />
            </Box>
            <h4 className={classes.footer}>8</h4>
            </Paper>
            <Paper className={classes.paper}>
            <h2>TOKEN UNLOCKING</h2>
            <p>
                The token release schedule involves minting 1 trillion VAF tokens during the network’s genesis transaction. These will immediately be divided into 5 separate holding wallets respective to the 5 functions: presale, public sale, liquidity, development team, and community development fund. The tokens will be unlocked given the below schedule, where at the time of unlocking they are available for sale (presale, public sale and liquidity) or allocated to the team or community.
            </p>
            <Box display="flex" justifyContent="center">
                <img alt="whitepaper" className={classes.imageDimensions} src="/images/whitepaper_10.png" />
            </Box>
            <h4 className={classes.caption}>VAF 4-Year Token Unlocking Schedule</h4>
            <h2>DONATING TO VEGAN AF</h2>
            <p>The Vegan AF team began accepting donations in April 2021 and will continue to accept donations to enhance fund operations and capabilities. Donations may be made by those who are interested in seeing the Vegan AF mission succeed but are not interested in being token holders, token holders who want to increase their support for Vegan AF, or by those who cannot purchase VAF tokens due to international regulations. We appreciate all donations made and your amazing support of Vegan AF. We are excited to change the world with you.</p>
            <h4 className={classes.footer}>9</h4>
            </Paper>
        </section>
        </>
    )
}

export default WhitePaper

