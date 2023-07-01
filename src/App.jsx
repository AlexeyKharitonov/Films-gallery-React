import React from 'react';
import cn from 'classnames';

const mockData = new Array(10)
    .fill({})
    .map((item, index) => ({
        ...item,
        id: index,
        url: 'assets/img/Marvel1.jpg',
    }));

const App = () => (
    <div className='films-container'>
        <h1 className='films-container__title'>
            All Films
        </h1>
        <div className='films-container__actions'>
            <button className='films-container__switch-btn active'>
                See all films
            </button>
            <button className='films-container__switch-btn'>
                See liked films
            </button>
        </div>
        <div className="film-cards-container">
            {mockData.map((item) => {
                return (
                    <div key={item.id} className="film-card">
                        <div className='film-card__img-wrp'>
                            <img className='film-card__img' src={item.url} />
                        </div>
                        <h2 className='film-card__title'>
                            Film Name
                        </h2>
                        <span className='film-card__year'>2022</span>
                        <button className='film-card__btn'>
                            <img className='film-card__btn-img' src="assets/img/unLike.png" />
                        </button>
                    </div>
                );
            })}
        </div>
    </div>
);

export default App;
