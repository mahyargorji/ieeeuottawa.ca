import React, { Component } from "react";
import { GridList, Button } from "@material-ui/core";
import { graphql, StaticQuery } from "gatsby";
import Carousel, { Modal, ModalGateway } from "react-images";
import Title from "../components/title";
import { GalleryCard } from "../components/cards";

import img1 from "../../static/images/gallery/01.jpg";
import img2 from "../../static/images/gallery/02.jpg";
import img3 from "../../static/images/gallery/03.jpg";
import img4 from "../../static/images/gallery/04.jpg";
import img5 from "../../static/images/gallery/05.jpg";
import img6 from "../../static/images/gallery/06.jpg";
import img7 from "../../static/images/gallery/07.jpg";
import img8 from "../../static/images/gallery/08.jpg";
import img9 from "../../static/images/gallery/09.jpg";
import img10 from "../../static/images/gallery/010.jpg";
import img11 from "../../static/images/gallery/011.jpg";
import img12 from "../../static/images/gallery/012.jpg";
import img13 from "../../static/images/gallery/013.jpg";
import img14 from "../../static/images/gallery/014.jpg";
import img15 from "../../static/images/gallery/015.jpg";
import img16 from "../../static/images/gallery/016.jpg";
import img17 from "../../static/images/gallery/017.jpg";
import img18 from "../../static/images/gallery/018.jpg";
import img19 from "../../static/images/gallery/019.jpg";
import img20 from "../../static/images/gallery/020.jpg";
import img21 from "../../static/images/gallery/021.jpg";
import img22 from "../../static/images/gallery/022.jpg";
import img23 from "../../static/images/gallery/023.jpg";
import img24 from "../../static/images/gallery/024.jpg";
import img25 from "../../static/images/gallery/025.jpg";
import img26 from "../../static/images/gallery/026.jpg";
import img27 from "../../static/images/gallery/027.jpg";
import img28 from "../../static/images/gallery/028.jpg";
import img29 from "../../static/images/gallery/029.jpg";
import img30 from "../../static/images/gallery/030.jpg";
import img31 from "../../static/images/gallery/031.jpg";
import img32 from "../../static/images/gallery/032.jpg";
import img33 from "../../static/images/gallery/033.jpg";
import img34 from "../../static/images/gallery/034.jpg";
import img35 from "../../static/images/gallery/035.jpg";
import img36 from "../../static/images/gallery/036.jpg";
import img37 from "../../static/images/gallery/037.jpg";
import img38 from "../../static/images/gallery/038.jpg";
import img39 from "../../static/images/gallery/039.jpg";
import img40 from "../../static/images/gallery/040.jpg";
import img41 from "../../static/images/gallery/041.jpg";
import img42 from "../../static/images/gallery/042.jpg";
import img43 from "../../static/images/gallery/043.jpg";
import img44 from "../../static/images/gallery/044.jpg";
import img45 from "../../static/images/gallery/045.jpg";
import img46 from "../../static/images/gallery/046.jpg";
import img47 from "../../static/images/gallery/047.jpg";
import img48 from "../../static/images/gallery/048.jpg";
import img49 from "../../static/images/gallery/049.jpg";
import img50 from "../../static/images/gallery/050.jpg";
import img51 from "../../static/images/gallery/051.jpg";
import img52 from "../../static/images/gallery/052.jpg";
import img53 from "../../static/images/gallery/053.jpg";
import img54 from "../../static/images/gallery/054.jpg";
import img55 from "../../static/images/gallery/055.jpg";
import img56 from "../../static/images/gallery/056.jpg";
import img57 from "../../static/images/gallery/057.jpg";
import img58 from "../../static/images/gallery/058.jpg";
import img59 from "../../static/images/gallery/059.jpg";
import img60 from "../../static/images/gallery/060.jpg";
import img61 from "../../static/images/gallery/061.jpg";
import img62 from "../../static/images/gallery/062.jpg";
import img63 from "../../static/images/gallery/063.jpg";
import img64 from "../../static/images/gallery/064.jpg";
import img65 from "../../static/images/gallery/065.jpg";
import img66 from "../../static/images/gallery/066.jpg";
import img67 from "../../static/images/gallery/067.jpg";
import img68 from "../../static/images/gallery/068.jpg";
import img69 from "../../static/images/gallery/069.jpg";
import img70 from "../../static/images/gallery/070.jpg";
import img71 from "../../static/images/gallery/071.jpg";
import img72 from "../../static/images/gallery/072.jpg";
import img73 from "../../static/images/gallery/073.jpg";
import img74 from "../../static/images/gallery/074.jpg";
import img75 from "../../static/images/gallery/075.jpg";
import img76 from "../../static/images/gallery/076.jpg";
import img77 from "../../static/images/gallery/077.jpg";
import img78 from "../../static/images/gallery/078.jpg";
import img79 from "../../static/images/gallery/079.jpg";
import img80 from "../../static/images/gallery/080.jpg";
import img81 from "../../static/images/gallery/081.jpg";
import img82 from "../../static/images/gallery/082.jpg";
import img83 from "../../static/images/gallery/083.jpg";
import img84 from "../../static/images/gallery/084.jpg";
import img85 from "../../static/images/gallery/085.jpg";
import img86 from "../../static/images/gallery/086.jpg";
import img87 from "../../static/images/gallery/087.jpg";
import img88 from "../../static/images/gallery/088.jpg";
import img89 from "../../static/images/gallery/089.jpg";
import img90 from "../../static/images/gallery/090.jpg";
import img91 from "../../static/images/gallery/091.jpg";
import img92 from "../../static/images/gallery/092.jpg";
import img93 from "../../static/images/gallery/093.jpg";
import img94 from "../../static/images/gallery/094.jpg";
import img95 from "../../static/images/gallery/095.jpg";
import img96 from "../../static/images/gallery/096.jpg";
import img97 from "../../static/images/gallery/097.jpg";
import img98 from "../../static/images/gallery/098.jpg";
import img99 from "../../static/images/gallery/099.jpg";
import img100 from "../../static/images/gallery/0100.jpg";
import img101 from "../../static/images/gallery/0101.jpg";
import img102 from "../../static/images/gallery/0102.jpg";
import img103 from "../../static/images/gallery/0103.jpg";
import img104 from "../../static/images/gallery/0104.jpg";
import img105 from "../../static/images/gallery/0105.jpg";
import img106 from "../../static/images/gallery/0106.jpg";
import img107 from "../../static/images/gallery/0107.jpg";
import img108 from "../../static/images/gallery/0108.jpg";
import img109 from "../../static/images/gallery/0109.jpg";
import img110 from "../../static/images/gallery/0110.jpg";
import img111 from "../../static/images/gallery/0111.jpg";
import img112 from "../../static/images/gallery/0112.jpg";
import img113 from "../../static/images/gallery/0113.jpg";
import img114 from "../../static/images/gallery/0114.jpg";
import img115 from "../../static/images/gallery/0115.jpg";
import img116 from "../../static/images/gallery/0116.jpg";
import img117 from "../../static/images/gallery/0117.jpg";
import img118 from "../../static/images/gallery/0118.jpg";
import img119 from "../../static/images/gallery/0119.jpg";
import img120 from "../../static/images/gallery/0120.jpg";
import img121 from "../../static/images/gallery/0121.jpg";
import img122 from "../../static/images/gallery/0122.jpg";
import img123 from "../../static/images/gallery/0123.jpg";
import img124 from "../../static/images/gallery/0124.jpg";
import img125 from "../../static/images/gallery/0125.jpg";
import img126 from "../../static/images/gallery/0126.jpg";
import img127 from "../../static/images/gallery/0127.jpg";
import img128 from "../../static/images/gallery/0128.jpg";
import img129 from "../../static/images/gallery/0129.jpg";
import img130 from "../../static/images/gallery/0130.jpg";
import img131 from "../../static/images/gallery/0131.jpg";

const archives = src => {
  const blacklist = new Set(["0121.jpg", "0123.jpg"]);
  for (const item of blacklist) if (String(src).includes(item)) return true;
  return false;
};

const srcArray = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
  { src: img13 },
  { src: img14 },
  { src: img15 },
  { src: img16 },
  { src: img17 },
  { src: img18 },
  { src: img19 },
  { src: img20 },
  { src: img21 },
  { src: img22 },
  { src: img23 },
  { src: img24 },
  { src: img25 },
  { src: img26 },
  { src: img27 },
  { src: img28 },
  { src: img29 },
  { src: img30 },
  { src: img31 },
  { src: img32 },
  { src: img33 },
  { src: img34 },
  { src: img35 },
  { src: img36 },
  { src: img37 },
  { src: img38 },
  { src: img39 },
  { src: img40 },
  { src: img41 },
  { src: img42 },
  { src: img43 },
  { src: img44 },
  { src: img45 },
  { src: img46 },
  { src: img47 },
  { src: img48 },
  { src: img49 },
  { src: img50 },
  { src: img51 },
  { src: img52 },
  { src: img53 },
  { src: img54 },
  { src: img55 },
  { src: img56 },
  { src: img57 },
  { src: img58 },
  { src: img59 },
  { src: img60 },
  { src: img61 },
  { src: img62 },
  { src: img63 },
  { src: img64 },
  { src: img65 },
  { src: img66 },
  { src: img67 },
  { src: img68 },
  { src: img69 },
  { src: img70 },
  { src: img71 },
  { src: img72 },
  { src: img73 },
  { src: img74 },
  { src: img75 },
  { src: img76 },
  { src: img77 },
  { src: img78 },
  { src: img79 },
  { src: img80 },
  { src: img81 },
  { src: img82 },
  { src: img83 },
  { src: img84 },
  { src: img85 },
  { src: img86 },
  { src: img87 },
  { src: img88 },
  { src: img89 },
  { src: img90 },
  { src: img91 },
  { src: img92 },
  { src: img93 },
  { src: img94 },
  { src: img95 },
  { src: img96 },
  { src: img97 },
  { src: img98 },
  { src: img99 },
  { src: img100 },
  { src: img101 },
  { src: img102 },
  { src: img103 },
  { src: img104 },
  { src: img105 },
  { src: img106 },
  { src: img107 },
  { src: img108 },
  { src: img109 },
  { src: img110 },
  { src: img111 },
  { src: img112 },
  { src: img113 },
  { src: img114 },
  { src: img115 },
  { src: img116 },
  { src: img117 },
  { src: img118 },
  { src: img119 },
  { src: img120 },
  { src: img121 },
  { src: img122 },
  { src: img123 },
  { src: img124 },
  { src: img125 },
  { src: img126 },
  { src: img127 },
  { src: img128 },
  { src: img129 },
  { src: img130 },
  { src: img131 }
];

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const modalIsOpen = !this.state.modalIsOpen;
    this.setState({ modalIsOpen });
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allGalleryJson {
              nodes {
                image {
                  childImageSharp {
                    fixed(width: 186, height: 186) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allGalleryJson: { nodes } }) => (
          <div className="center-horizontal">
            <Title variant="h5" gutterBottom className="title">
              Gallery
            </Title>
            <Button onClick={this.toggleModal}>Open Preview</Button>
            <GridList
              cols={5}
              style={{ margin: "0 5.0% 0" }}
              onClick={console.log("test")}
            >
              {nodes.map(({ image }) => {
                const src = image.childImageSharp.fixed.src;
                if (!archives(src)) return <GalleryCard image={image} />;
              })}
            </GridList>
            <ModalGateway>
              {this.state.modalIsOpen ? (
                <Modal onClose={this.toggleModal}>
                  <Carousel onClick={this.toggleModal} views={srcArray} />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        )}
      />
    );
  }
}
export default Gallery;
