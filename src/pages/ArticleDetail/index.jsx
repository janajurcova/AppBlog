import React from 'react'
import './style.css';
import { Link } from "react-router-dom";
import cat from '../ArticleList/cat.jpg';

export function Article({ article }) {
    return (
        <main style={{ padding: '1rem 0' }}>
        <div className="oneArticle">
        <div className="articalDetail">
            <h2>Article Detail</h2>
            <img src={cat} alt="photo"/>
                    <p>Men might grow a beard or maintain a mustache just for extra style points, but the facial hair of the cat has nothing to do with fashion. A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators.

                        Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs. At the root of each of these long, stiff hairs is a follicle loaded with nerves.

                        By brushing its whiskers against an object, a cat can detect the precise location, size and texture of the object, even in the dark. This feature proves particularly useful for a cat trying to gauge whether it can fit into a tight space. Whiskers also detect changes in air currents, helping cats detect approaching dangers.

                        Whiskers not only make cats aware of their surroundings, but can also provide humans with some insight into their pet's state of mind. For example, a set of taut whiskers, pulled back across the face, is a good indication that Kitty feels threatened, while relaxed whiskers, pointing away from the face, indicate a content cat.

                        Of course, cats aren't the only mammals with whiskers. Most mammalian species, including primates, are equipped with these extrasensory receptors. Biologists think mammals developed whiskers because they needed help sensing their environments at night.

                        The first small mammals shared the world with dinosaurs and had to adapt to hunting nocturnally, when their predators were less active. Whiskers helped these hungry animals find food and navigate dark terrain. This evolutionary adaptation also helps to explain why the whiskers of many nocturnal or aquatic carnivores — like rats, seals and walruses — are so prominent.</p>
            <div className="comments">
                <h2>Comments</h2>
            </div>
            </div>
            <div className="related">
                <h2>Related</h2>
                    <p>Wet vs. Dry Cat Food: Which is Better?</p>
                    <p>A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly ...</p>
            </div>
            </div>
        </main>
    );
};

{/* <div>
    <div className="the-articles">
        <div className="one-article">
            <img src={img} alt="photo" />
            <div className="article-info">
                <h2>{article.title}</h2>
                <div className="aut-date">
                    <span>{article.author}</span>
                    <BsDot />
                    <span>{article.date}</span>
                </div>
                <p className="article-text">{article.text}</p>
                <div className="link-com">
                    <Link to={`/single/${article.id}`}>
                        <span>Read whole article</span>
                    </Link>
                    <span className="com">{`${article.comments} comments`}</span>
                </div>
            </div>
        </div>
    </div>
</div> */}
  