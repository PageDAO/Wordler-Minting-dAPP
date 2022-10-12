import React from "react";
import { Link } from "react-router-dom";

import styles from './First.module.scss';
import { getImg } from "../../../utils/Helper";
import Button from "../../../components/Button";

const First = () => {

    return (
            <div className="h4">Follow Your Map...</div>
            <div className={styles.text}>
                <div className="body_1">
                    At the west end of Wordler Village, workers tend to a half-completed structure of stone and timber. The Royal Story-Minter steps forward to welcome you. &quot;You&apos;re early,&quot; he says, &quot;but that&apos;s good. Early folk are the ones who craft the future that everyone else lives in. The Minting Press is in beta, which means it&apos;s not yet got all the bells and whistles but it&apos;s &apos;beta&apos; than nothing. Come, mind the construction, and let me show you around...&quot; 
                </div>
            </div>
        <div className={styles.div}>
            <div className="h5 mt_200">Cryptoversal Books and PageDAO present</div>
            <div className="h2 h2_sm mt_15">Ye Olde Wordler Village Minting Press</div>
            <a href="#wallet">
                <Button value="Create your NFT"
                    style={{ width: 228, height: 56, marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}
                    white />
            </a>
            <img className={styles.pageDao} src={getImg('page_dao.png')} alt="page_dao" />
            <div className="h4">Tell Your Story...</div>
            <div className={styles.text}>
                <div className="body_1">
                    &quot;We all have our jobs to do,&quot; says the Royal Story-Minter. &quot;The Wordlers go out each day to discover Words of Protection that keep our village safe. That&apos;s an important job that we all celebrtate, but then you come along, with your job of weaving those words into the stories that empower and inspire and allow us to remember. For my money, your job is the one that keeps the cycle going. And me? My job is to help you do your job, of course. I am but here to serve.&quot;
                    <br></br>
                    Ye Olde Wordler Village Minting Press provides the Wordler Village community an opportunity to collaborate in the creation of a Web3 Literary Collection listed on the OpenSea marketplace and anywhere fine Polygon NFTs are sold. 
                    <br></br>
                    Your minted works are yours to sell or give away. Secondary royalties, at least for now, will be applied to overhead and further development of the minting press. 
                    <br></br>
                    *Note: The Minting Press is in beta and does not like large files.
                </div>
            </div>
            <Link to="#" className="mt_20 body_1">Get started now.</Link>
        </div>
    )
}

export default First
