import React, {useState} from 'react'
import Container from '../../components/Container/Container'
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Article from '../../components/Article/Article';

const Articles = () => {

    const [articles, setArticles] = useState([
        {
            id: 0,
            title: 'Kuliah Kewirausahaan Sosial Batch #2 Lebih Seru!',
            author: 'Anik Sri Ernawati',
            full_details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptatem sint dicta voluptas! Cumque dolor eos eveniet consectetur placeat quaerat corporis vitae labore atque. Quibusdam reprehenderit saepe cumque cum quas!',
            image: 'artikel.webp',
            created: '2020-08-08 23:41:42',
        },
        {
            id: 1,
            title: 'ARTIKEL KS MEETING PARTNER PERKULIAHAN 1',
            author: 'Anik Sri Ernawati',
            full_details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptatem sint dicta voluptas! Cumque dolor eos eveniet consectetur placeat quaerat corporis vitae labore atque. Quibusdam reprehenderit saepe cumque cum quas!',
            image: 'PosterCentangBiru.webp',
            created: '2020-08-08 23:41:42',
        },
        {
            id: 2,
            title: 'Ngrobrol Bisnis Bareng Reza Rahadian',
            author: 'Anik Sri Ernawati',
            full_details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptatem sint dicta voluptas! Cumque dolor eos eveniet consectetur placeat quaerat corporis vitae labore atque. Quibusdam reprehenderit saepe cumque cum quas!',
            image: 'image (1).webp',
            created: '2020-08-08 23:41:42',
        }
    ])

    return (
        <div>
            <Container>
                <SectionHeader heading="Artikel" />
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center">
                    {
                        articles.map((article, index) => (
                            <Article article={article} index={index} key={article.id} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Articles
