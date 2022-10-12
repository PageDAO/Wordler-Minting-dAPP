import React from "react";
import { MultiSelectComponent, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import styles from './CreateNFT.module.scss'
import './Select.css'
import Button from "../Button";

const genreData = [
    { "id": "Children's", "title": "Children's" },
    { "id": "Young Adult", "title": "Young Adult" },
    { "id": "Non-Fiction", "title": "Non-Fiction" },
    { "id": "Non-Fic: Biography", "title": "Non-Fict: Biography" },
    { "id": "Non-Fic: Nature", "title": "Non-Fic: Nature" },
    { "id": "Non-Fic: Memoir", "title": "Non-Fic: Memoir" },
    { "id": "Action & Adventure", "title": "Action & Adventure" },
    { "id": "Action: Military", "title": "Action: Military" },
    { "id": "Action: Spies", "title": "Action: Spies" },
    { "id": "Action: Superheroes", "title": "Action: Superheroes" },
    { "id": "Action: True Crime", "title": "Action: True Crime" },
    { "id": "Erotica", "title": "Erotica" },
    { "id": "Fantasy", "title": "Fantasy" },
    { "id": "Fantasy: Contemporary", "title": "Fantasy: Contemporary" },
    { "id": "Fantasy: Fairytale", "title": "Fantasy: Fairytale" },
    { "id": "Fantasy: High", "title": "Fantasy: High" },
    { "id": "Fantasy: Historical", "title": "Fantasy: Historical" },
    { "id": "Fantasy: Isekai", "title": "Fantasy: Isekai" },
    { "id": "Fantasy: LitRPG", "title": "Fantasy: LitRPG" },
    { "id": "Fantasy: Mythic", "title": "Fantasy: Mythic" },
    { "id": "Fantasy: Urban", "title": "Fantasy: Urban" },
    { "id": "Historical Fiction", "title": "Historical Fiction" },
    { "id": "Historical: Alternate", "title": "Historical: Alternate" },
    { "id": "Historical: Gothic", "title": "Historical: Gothic" },
    { "id": "Historical: Jidaigeki", "title": "Historical: Jidaigeki" },
    { "id": "Historical: Western", "title": "Historical: Western" },
    { "id": "Horror", "title": "Horror" },
    { "id": "Horror: Ghosts", "title": "Horror: Ghosts" },
    { "id": "Horror: Monsters", "title": "Horror: Monsters" },
    { "id": "Horror: Supernatural", "title": "Horror: Supernatural" },
    { "id": "Horror: Zombies", "title": "Horror: Zombies" },
    { "id": "Humor", "title": "Humor" },
    { "id": "Humor: Parody", "title": "Humor: Parody" },
    { "id": "Humor: Satire", "title": "Humor: Satire" },
    { "id": "Mystery", "title": "Mystery" },
    { "id": "Mystery: Cozy", "title": "Mystery: Cozy" },
    { "id": "Mystery: Detective", "title": "Mystery: Detective" },
    { "id": "Mystery: Supernatural", "title": "Mystery: Supernatural" },
    { "id": "NFT Lore", "title": "NFT Lore" },
    { "id": "Paranormal", "title": "Paranormal" },
    { "id": "Religion", "title": "Religion" },
    { "id": "Religion: Abrahamic", "title": "Religion: Abrahamic" },
    { "id": "Religion: Buddhist", "title": "Religion: Buddhist" },
    { "id": "Religion: Hindu", "title": "Religion: Hindu" },
    { "id": "Religion: Polytheistic", "title": "Religion: Polytheistic" },
    { "id": "Romance", "title": "Romance" },
    { "id": "Romance: LGBTQIA", "title": "Romance: LGBTQIA" },
    { "id": "Romance: Paranormal", "title": "Romance: Paranormal" },
    { "id": "Romance: Spicy", "title": "Romance: Spicy" },
    { "id": "Romance: Sweet", "title": "Romance: Sweet" },
    { "id": "Science Fiction", "title": "Science Fiction" },
    { "id": "SF: Cyberpunk", "title": "SF: Cyberpunk" },
    { "id": "SF: Grimdark", "title": "SF: Grimdark" },
    { "id": "SF: Hard", "title": "SF: Hard" },
    { "id": "SF: Military", "title": "SF: Military" },
    { "id": "SF: Post-Apocalyptic", "title": "Post-Apocalyptic" },
    { "id": "SF: Solarpunk", "title": "SF: Solarpunk" },
    { "id": "SF: Space Opera", "title": "SF: Space Opera" },
    { "id": "SF: Steampunk", "title": "SF: Steampunk" },
    { "id": "Sports", "title": "Sports" },
    { "id": "Thriller", "title": "Thriller" },
    { "id": "Thriller: Disaster", "title": "Thriller: Disaster" },
    { "id": "Thriller: Dystopian", "title": "Thriller: Dystopian" },
    { "id": "Thriller: Legal", "title": "Thriller: Legal" },
    { "id": "Thriller: Medical", "title": "Thriller: Medical" },
    { "id": "Thriller: Political", "title": "Thriller: Political" },
    { "id": "Thriller: Psychological", "title": "Thriller: Psychological" },
    { "id": "Thriller: Techno", "title": "Thriller: Techno" }
]

const formatData = [
    { "id": "Comics, Manga, & Graphic Novels", "title": "Comics, Manga, & Graphic Novels" },
    { "id": "Poetry", "title": "Poetry" },
    { "id": "Serialized Story", "title": "Serialized Story" },
    { "id": "Short Story", "title": "Short Story" },
    { "id": "Short Story Collection", "title": "Short Story Collection" },
    { "id": "Novella", "title": "Novella" },
    { "id": "Light Novel", "title": "Light Novel" },
    { "id": "Novel", "title": "Novel" },
    { "id": "Novel in Verse", "title": "Novel in Verse" },
    { "id": "Screenplay", "title": "Screenplay" }
]

const languageData = [
    { "id": 'EN', "title": "EN" },
    { "id": 'RU', "title": "RU" },
    { "id": 'ES', "title": "ES" },
    { "id": 'FR', "title": "FR" },
    { "id": 'PT', "title": "PT" },
    { "id": 'DE', "title": "DE" },
    { "id": 'RU', "title": "RU" },
    { "id": 'JA', "title": "JA" },
    { "id": 'ZH', "title": "ZH" }
]

const promptData = [
    { "id": 'AGAPE', "title": "AGAPE" },
    { "id": 'APRON', "title": "APRON" },
    { "id": 'ATONE', "title": "ATONE" },
    { "id": 'AWFUL', "title": "AWFUL" },
    { "id": 'BEADY', "title": "BEADY" },
    { "id": 'BERTH', "title": "BERTH" },
    { "id": 'BLAND', "title": "BLAND" },
    { "id": 'BLOWN', "title": "BLOWN" },
    { "id": 'BRINK', "title": "BRINK" },
    { "id": 'CACAO', "title": "CACAO" },
    { "id": 'DONOR', "title": "DONOR" },
    { "id": 'DROLL', "title": "DROLL" },
    { "id": 'EGRET', "title": "EGRET" },
    { "id": 'FIELD', "title": "FIELD" },
    { "id": 'FLOAT', "title": "FLOAT" },
    { "id": 'FLOOD', "title": "FLOOD" },
    { "id": 'FLUFF', "title": "FLUFF" },
    { "id": 'GAWKY', "title": "GAWKY" },
    { "id": 'GIRTH', "title": "GIRTH" },
    { "id": 'GLOAT', "title": "GLOAT" },
    { "id": 'GOOSE', "title": "GOOSE" },
    { "id": 'HUTCH', "title": "HUTCH" },
    { "id": 'INPUT', "title": "INPUT" },
    { "id": 'LILAC', "title": "LILAC" },
    { "id": 'LIVER', "title": "LIVER" },
    { "id": 'LOSER', "title": "LOSER" },
    { "id": 'MADAM', "title": "MADAM" },
    { "id": 'NIGHT', "title": "NIGHT" },
    { "id": 'PIETY', "title": "PIETY" },
    { "id": 'PINTO', "title": "PINTO" },
    { "id": 'PRIMO', "title": "PRIMO" },
    { "id": 'RETRO', "title": "RETRO" },
    { "id": 'ROOMY', "title": "ROOMY" },
    { "id": 'RUSTY', "title": "RUSTY" },
    { "id": 'SEVER', "title": "SEVER" },
    { "id": 'SMITE', "title": "SMITE" },
    { "id": 'STEAD', "title": "STEAD" },
    { "id": 'TRAIT', "title": "TRAIT" },
    { "id": 'VOICE', "title": "VOICE" },
    { "id": 'WEDGE', "title": "WEDGE" }
]

const fields = { text: 'title', value: 'id' }

const CreateNFT = (props) => {
    const {
        minting,
        pdfName,
        setActivePdfModal,
        setPdfUrl,
        setPdfName,
        setTitle,
        setAuthor,
        setDescription,
        imageName,
        setImageName,
        setArtist,
        setGenre,
        setLanguage,
        setQty,
        onPdfChange,
        onImageChange,
        create
    } = props
    return (
        <div className={styles.div}>
            <div className="d_flex justify_content_between align_items_center">
                <div className="h6">My book</div>
                <Button value="Preview" style={{ width: 106, height: 32 }}
                    disabled={pdfName === 'No file choosen'}
                    onClick={e => setActivePdfModal(true)} red />
            </div>
            <form>
                <div className={styles.row}>
                    <div className="caption grey60"> Pdf file </div>
                    <input
                        type="file"
                        onChange={(e) => {
                            onPdfChange(e.target.files[0])
                            setPdfName(e.target.files[0].name)
                            setPdfUrl(URL.createObjectURL(e.target.files[0]))
                        }}
                        accept="application/pdf"
                        id="pdf"
                        autoComplete="off"
                        hidden
                    />
                    <div className="d_flex align_items_center">
                        <label htmlFor="pdf" className={styles.btnFile}>
                            Select
                        </label>
                        <span className="body_1 ml_10">{pdfName}</span>
                    </div>
                </div>
                <div className="caption grey60 mt_5 ml_10">
                    Please use a standard letter-size PDF of 8.5x11" with 1" margins and a font size of 12pt or greater. The first page should be your book cover.
                </div>
                <div className={styles.row}>
                    <div className="caption grey60"> Book title </div>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        id="title"
                        name="title"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className={styles.row}>
                    <div className="caption grey60"> Author(s) </div>
                    <input
                        type="text"
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        id="author"
                        name="author"
                        autoComplete="off"
                    />
                </div>
                <div className="caption grey60 mt_5 ml_10"> Separate by comma </div>
                <div className={styles.row}>
                    <div className="caption grey60"> Description </div>
                    <textarea
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        id="description"
                        name="description"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="h6 mt_25">Image</div>
                <div className="caption grey60 mt_8">Recommend 1224 x 1584 pixel, Letter size</div>
                <div className={styles.row_group}>
                    <div className={styles.row}>
                        <div className="caption grey60"> Book cover image </div>
                        <input
                            type="file"
                            onChange={(e) => {
                                setImageName(e.target.files[0].name)
                                onImageChange(e.target.files[0])
                            }}
                            accept="image/*"
                            id="image"
                            hidden
                            autoComplete="off"
                        />
                        <div className="d_flex align_items_center">
                            <label htmlFor="image" className={styles.btnFile}>
                                Select
                            </label>
                            <span className="body_1 ml_10">{imageName}</span>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className="caption grey60"> Artist(s) </div>
                        <input
                            type="text"
                            onChange={(e) => setArtist(e.target.value)}
                            id="artist"
                            name="artist"
                            required
                            autoComplete="off"
                        />
                    </div>
                </div>
                <div className="h6 mt_25">Meta data</div>
                <div className={styles.row}>
                    <div className="caption grey60"> Genre </div>
                    <MultiSelectComponent
                        id="genre"
                        name="genre"
                        dataSource={genreData}
                        mode="Delimiter"
                        fields={fields}
                        change={e => setGenre(e.value)} />
                </div>
                <div className={styles.row_group}>
                    <div className={styles.row}>
                        <div className="caption grey60"> Language </div>
                        <DropDownListComponent
                            id="language"
                            name="language"
                            dataSource={languageData}
                            fields={fields} popupHeight="auto"
                            change={e => setLanguage(e.value)} />
                    </div>
                    <div className={styles.row}>
                        <div className="caption grey60"> Quantity (max. 1000) </div>
                        <input
                            type="number"
                            onChange={(e) => setQty(e.target.value)}
                            id="qty"
                            name="qty"
                            required
                            autoComplete="off"
                        />
                    </div>
                </div>
                <Button value="Create" redBg onClick={create} disabled={minting}
                    style={{ width: '100%', height: 56, marginTop: 25 }} />
            </form>
        </div>
    );
}

export default CreateNFT
