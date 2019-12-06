import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import axios from "axios/index";

const TabPane = Tabs.TabPane;

class NewTab extends Component{
	constructor(props) {
        super(props)
        this.state = {
            news: [],
            sports: [],
        };
    }

    componentDidMount() {
        this.callApi()
    }

    async callApi(){
        const sports = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=6e7e6a696773424187f9bdb80954ded7');
        const news = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6e7e6a696773424187f9bdb80954ded7');
        this.setState({news: news.data.articles, sports: sports.data.articles})
    }

	render(){
		const { news, sports } = this.state;

		return(
			<Tabs defaultActiveKey="2" style={{border:'1px solid gray',backgroundColor:'rgba(119, 136, 153, 0.05)',padding: '10px'}}>
                <TabPane style={{height: '450px', 'overflowY': 'overlay', color:'#34414c'}} tab='SPORTS' key="1">
                    {sports.map((elem, key) => {
                        return(
                            <div key={key} className="b-sec">
                                <a href={elem.url} target="_blank">
                                    <img style={{width: '100%'}} src={elem.urlToImage} alt=""/>
                                    <p style={{color:'#34414c'}}><b style={{color:'#34414c'}}>{elem.title}</b></p>
                                </a>
                            </div>
                        )
                    })}
                </TabPane>
                <TabPane style={{height: '450px', 'overflowY': 'overlay'}} tab='NEWS' key="2">
                    {news.map((elem, key) => {
                        return(
                            <div key={key} className="b-sec">
                                <a href={elem.url} target="_blank">
                                    <img style={{width: '100%'}} src={elem.urlToImage} alt=""/>
                                    <p style={{color:'#34414c'}}><b style={{color:'#34414c'}}>{elem.title}</b></p>
                                </a>
                            </div>
                        )
                    })}
                </TabPane>
            </Tabs>
		)
	}
}

export default NewTab;