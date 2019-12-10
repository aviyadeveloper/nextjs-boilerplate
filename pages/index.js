import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Article from '../components/Article';
import '../styles/styles.scss';

const Index = () => (
  <div>
    <Head>
      <title>Index</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />
    <div className="content-container">
      <Article
        title="Index Article"
        subtitle="This is the main index article"
        content={content}
      />
    </div>
  </div>
);

const content = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget elit tincidunt, pharetra ipsum at, cursus erat. Quisque neque nulla, egestas id justo id, luctus sodales urna. Mauris pulvinar lobortis vestibulum. Donec a tellus nec nibh gravida egestas a sit amet mauris. Mauris sit amet ligula non tortor feugiat rhoncus et id erat. Nullam tempus ex risus. Donec at pulvinar dui. Ut sit amet nulla porta, convallis diam eget, ultricies felis. Aliquam iaculis molestie velit vitae congue. Ut ullamcorper sodales dolor at condimentum. Aenean id scelerisque odio. Curabitur molestie nisl vulputate, egestas sapien eu, cursus quam. Nam facilisis ac metus id feugiat. Donec ullamcorper ultrices felis, a consequat elit condimentum eget.',
  'Cras sollicitudin ultrices sapien id dictum. Aliquam odio augue, convallis eu eleifend sed, fringilla dignissim est. Vestibulum ultrices magna metus, vitae lobortis ante vulputate id. Vivamus dignissim dapibus odio ut dictum. Nulla mauris nisl, pellentesque ac nibh nec, venenatis egestas elit. Duis quis massa eget urna rhoncus pulvinar sit amet ac nunc. Integer lacinia, elit sed viverra tristique, augue nulla rhoncus massa, et vehicula justo ante at nulla.',
  'Quisque cursus ultricies libero a mattis. Integer a leo quis dolor laoreet pellentesque. Praesent quis tincidunt neque. Praesent sed ante sit amet risus imperdiet mollis. Nulla facilisi. Integer imperdiet fringilla ante eget commodo. Morbi pretium eleifend ante et sollicitudin. Fusce elementum elementum molestie. Nam ultricies at neque vitae ultricies. Phasellus id dignissim mi. Proin iaculis urna sapien, pellentesque pharetra ante ultricies ut. Pellentesque quis sem ac lacus fermentum mattis non ut.'
];

export default Index;
