import {Paper, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Head from 'next/head';
import DeforestationChart from '../components/DeforestationChart';
import PopulationPredictions from '../components/PopulationPredictions';
import FundsPie from '../components/FundsPie';
import TokenPie from '../components/TokenPie';
import OperationPie from '../components/OperationPie';
import TokenReleaseStep from '../components/TokenReleaseStep';
const useStyles = makeStyles(theme => ({
    firstPaper: {
        width: "90%",
        maxWidth: "90vh",
        margin: "1.5rem auto",
        padding: "3rem 6rem 6rem 6rem",
        [theme.breakpoints.down('xs')] : {
            width: "100%",
            padding: "2rem"
        }
    },
    paper: {
        width: "90%",
        maxWidth: "90vh",
        margin: "1.5rem auto",
        padding: "6rem",
        [theme.breakpoints.down('xs')] : {
            width: "100%",
            padding: "2rem"
        }
    },

    section: {
        '& h3' : {
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
        width: "97%",
        height: "auto"
    },

    imageDimensions: {
            width: "95%",
            height: "auto"
    },

    logo: {
        width: "80px",
        height: "80px",
        cursor: "pointer"
    }
}))


const WhitePaper = () => {
    const classes = useStyles();
    let page = 0;
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
                <h3>EXECUTIVE SUMARRY</h3>
                <p>
                The Vegan Africa Fund is an impact fund supporting a vegan future in Africa. There are many exciting African-based vegan ventures, and a growing consumer interest in quality vegan products. However, existing ventures lack expansion capital, and have competition from imported vegan products from Australia, Europe, Asia, and further away. Vegan AF raises capital to support a decentralized network of vegan ventures and scale their efforts. In exchange for capital support, Vegan AF holds equity in the companies we support. As partnered operations grow, the Vegan AF network grows, and Vegan AF’s portfolio value grows. Our network is enabled through the VAF impact token, an investment cryptocurrency that represents holding a stake in the vegan future of Africa.
                 </p>

                <h3>TOKENOMICS SUMMARY</h3>
                <p>
                VAF is the native token of the Vegan AF network, and is an impact token enabling co-operation of vegan individuals and ventures through the VAF token economy. Impact investors, by purchasing VAFs, allow Vegan AF to strategically acquire, hold, assist, and form companies aligned with our mission. For every 10 VAFs purchased, 1 VAF will be distributed through the Community Development Fund or as part of the Vegan AF rewards program. As the Vegan AF network expands, VAF tokens can be redeemed for products, services, experiences and delicious vegan food from partnered operations. The VAF token provides proof of impact, where the token usage can be tied to sustainable operations and our increasing share in the growing value of the vegan economy. VAF tokens will grow in value as Vegan AF’s portfolio grows and market cap increases. Our mission is to make plant-based options plentiful, delicious, local, and sustainable, while making the plant-based evolution accessible to the fastest-growing continent on Earth.
                </p>
                <Box display="flex" justifyContent="center">
                <img alt="whitepaper" className={classes.imageDimensions} src="/images/whitepaper_2.png" />
                </Box>
                <h4 className={classes.footer}>{page++ }</h4>
            </Paper>

            <Paper className={classes.paper}>
                <h3>INTRODUCTION</h3>
                <p>Complete ecological breakdown is the greatest threat to humanity, and it’s happening in front of our eyes. Destructive industrialization and dependence on livestock agriculture have caused severe environmental damage, and these harmful practices are rapidly expanding in Africa <span className={classes.span}><a href="https://www.dropbox.com/sh/yd8l2v0u4jqptp3/AACpraYjOYWpTxAFv5H-2vrKa/1%20Global%20Assessment%20Summary%20for%20Policymakers?dl=0&preview=Summary+for+Policymakers+IPBES+Global+Assessment.pdf&subfolder_nav_tracking=1">(Diaz, Setelle, Brondizio, et al.)</a></span>.
                Humans must move forward on the solution path by rejecting the problem path and abandoning harmful practices. The greatest impact will come from massive societal shifts towards sustainability, and adopting a plant-based diet is shown to be the most impactful action the average  individual can take to fight climate change <span className={classes.span}><a href="https://www.ipcc.ch/site/assets/uploads/sites/2/2019/06/SR15_Full_Report_High_Res.pdf">(IPCC)</a></span>.Vegan AF seeks to make this lifestyle shift accessible to anyone who wishes to adopt it on the African continent.</p>
                <p>The African population is projected to nearly quadruple from 1.2 billion today to over 4 billion in the next century <span className={classes.span}><a href="https://www.worldbank.org/en/region/afr/overview">(World Bank)</a></span>.
                That's a lot more people to feed; in fact, Africa is growing faster than any other continent. How we increase food production must be rooted in regeneration instead of destruction, especially encouraging food forests to regenerate the earth.
                </p>
                <Box display="flex" justifyContent="center">
                   <PopulationPredictions />
                </Box>
                <Box textAlign="center">
                <h4 className={classes.span}><a href="https://ourworldindata.org/future-population-growth">Current Population Vs. Projected Population By Continent</a></h4>
                </Box>
                <h4 className={classes.footer}>{page++}</h4>
            </Paper>


            <Paper className={classes.paper}>
                <h3>INTRODUCTION</h3>
                <p>
                    Rainforests in Congo and throughout Africa are being slashed for industrial and agricultural expansion. Animal agriculture is largely responsible for the rapid depletion of resources that could otherwise be used to end world hunger <span className={classes.span}><a href="https://www.cifor.org/publications/pdf_files/OccPapers/OP-144.pdf">(Tchatchou et. al)</a></span>.
                </p>
                <Box display="flex" justifyContent="center">
                   <DeforestationChart />
                </Box>
                <Box textAlign="center">
                <h4 className={classes.span}><a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/65505/6316-drivers-deforestation-report.pdf">Causes of Deforestation in the Congo Rainforest</a></h4>
                </Box>
                <p>Humanity currently lacks the collective will, cooperation, and institutional structures to dramatically shift our lifestyles for the better. On a continent where more than half of the population is children or young adults <span className={classes.span}><a href="https://data.unicef.org/wp-content/uploads/2019/01/Children-in-Africa.pdf">(UNICEF)</a></span>, Vegan AF is shaping the future by empowering the youth to follow the solution path of adopting a vegan diet. </p>
                <p>Vegan AF is enabling an increasingly plant-based world, where the majority of soy and grain crops are shifted to feeding humans instead of livestock <span className={classes.span}><a href="https://www.usda.gov/sites/default/files/documents/coexistence-soybeans-factsheet.pdf">(USDA)</a></span>.
                At the same time as people are going hungry, a large proportion of edible calories are feeding bred animals, which yields a much lower caloric value for human consumption compared to eating the crops themselves <span className={classes.span}><a href="https://iopscience.iop.org/article/10.1088/1748-9326/8/3/034015/pdf">(Cassidy et. al)</a></span>.
                A focus on reduction in consumed animals will allow for enough resources to support a healthy diet and a life free from poverty for every human on the planet, regardless of population growth <span className={classes.span}><a href="https://www.onegreenplanet.org/environment/world-hunger-population-growth-ditching-meat/">(One Green Planet)</a></span>.</p>
                <p>Veganism, historically, has been a technique adopted by concerned individuals doing their part to act ethically, improve health, and solve environmental issues. Vegan AF is utilizing veganism as a preventative approach to some of the world’s greatest challenges, and to restore the balance between human and nature.</p>
                <h4 className={classes.footer}>{page++}</h4>
              </Paper>

            <Paper className={classes.paper}>
              <h3>OPERATIONS STRATEGY</h3>
              <p>
              As the vegan economy grows in Africa, Vegan AF aims to be at the forefront. Funds raised through VAF sales will go towards the following activities: Strategic Acquisitions, Development of Shared Resources, Social Impact Initiatives, Operations, Marketing and Legal. Vegan AF will acquire equity in the ventures we invest in, making up the Vegan AF portfolio.
              </p>
              <p>
              The Social Impact Fund consists of 10% of all Vegan AF funds, as we are committed to increasing our social impact during every phase of our operations. Projects that we support are not-for-profit initiatives including vegan meal distribution programs, animal sanctuaries, environmental restoration, and tree-planting initiatives.
              </p>
              <p>The Resources Fund receives 5% of all funds, and supports the development of shared resources for the Vegan AF network. The first of these resources includes technical resources such as the VAF wallet and POS system to enable all of the ventures we partner with to support VAF payments. Vegan AF also will develop physical resources, including a decentralized network of VFarms which focus on regenerative agriculture and reforestation. Additional resources we are interested in developing include VFactory, a decentralized network of co-factory spaces, VKitchen, a network of cloud kitchen production spaces, and VStore, a network of storefronts selling 100% vegan products.
              </p>
              <p>The Vegan AF Operations budget is 5% of the total fund. Operations include overhead costs for web and digital services, renting a physical location, and salaries for Vegan AF team members, where the team should expand to fit the budget as the network grows and as fundraising rounds are successful. The marketing budget is 2.5% of the total fund. This includes advertising for the ventures we support and for Vegan AF, sponsoring vegan sports teams or events like VegFest, and outsourcing marketing expertise to help grow the Vegan AF brand and network. The remaining 2.5% of the fund is reserved for Legal fees, to make sure our operations are compliant, that we have all appropriate permits, and to help form contracts with partnered parties.
              </p>
              <Box display="flex" justifyContent="center">
                 <OperationPie />
              </Box>


              <h4 className={classes.footer}>{page++}</h4>
            </Paper>








              <Paper className={classes.paper}>
                  <h3>TOKENOMICS</h3>
                  <p>VAF is the capped supply impact token of the Vegan AF network. VAF tokens are created during the network’s genesis transaction, at a fixed amount of 1 trillion VAF. Following the network’s inception, there are no mining activities associated with the Vegan AF network. Vegan AF applications have the ability to support additional types of tokens, although they are not considered VAF tokens and do not impact VAF token supply and demand.</p>
                  <p>VAF tokens will be accepted and used through the Vegan AF network and by Vegan AF businesses, showing how much impact a tokenized vegan economy can have for the world. The token value will increase as Vegan AF operations expand and the businesses we partner with become successful and profitable.</p>
                  <p>Vegan AF invests in plant-based African companies. The purchase of VAF tokens provides critical expansion and start-up capital to vegan and sustainable businesses in Africa. We're operating as a social enterprise and creating a circular vegan economy to benefit society, the environment, and improve how people do business. Vegan AF is for conscious profit, where emphasis is on making and empowering more vegans and scaling vegan ventures, not a business centered on solely profits.</p>
                  <p>All profits, from token sales or from the result of the ventures we partner with profiting, cycle into the vegan AF funds pool. This allows us to build a sustainable circular economy instead of relying solely on token sales to support our efforts.</p>
                  <Box display="flex" justifyContent="center">
                     <FundsPie />
                  </Box>
                  <h4 className={classes.caption}>Vegan AF Funds Distribution</h4>
                  <h4 className={classes.footer}>{page++}</h4>
            </Paper>





            <Paper className={classes.paper}>
            <h3>TOKEN UNLOCKING</h3>
            <p>
                The token release schedule involves minting 1 trillion VAF tokens during the network’s genesis transaction. These will immediately be divided into 5 separate holding wallets respective to the 5 functions: presale, public sale, liquidity, development team, and community development fund. The tokens will be unlocked given the below schedule, where at the time of unlocking they are available for sale (presale, public sale and liquidity) or allocated to the team or community.
            </p>
            <Box display="flex" justifyContent="center">
               <TokenReleaseStep />
            </Box>
            <h4 className={classes.caption}>VAF 4-Year Token Unlocking Schedule</h4>

              <h4 className={classes.footer}>{page++}</h4>
            </Paper>


            <Paper className={classes.paper}>

              <h3>DECENTRALIZED AUTONOMOUS ORGANIZATION (DAO)</h3>
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
              <h3>DONATING TO VEGAN AF</h3>
              <p>The Vegan AF team began accepting donations in April 2021 and will continue to accept donations to enhance fund operations and capabilities. Donations may be made by those who are interested in seeing the Vegan AF mission succeed but are not interested in being token holders, token holders who want to increase their support for Vegan AF, or by those who cannot purchase VAF tokens due to international regulations. We appreciate all donations made and your amazing support of Vegan AF. We are excited to change the world with you.</p>
              <h4 className={classes.footer}>{page++}</h4>
            </Paper>


        </section>
        </>
    )
}

export default WhitePaper
