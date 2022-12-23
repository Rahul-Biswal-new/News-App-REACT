import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general',
  }


  // articles = [
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]
  // articles = [
  //   {
  //     "source": { "id": "der-tagesspiegel", "name": "Der Tagesspiegel" },
  //     "author": "Simon Rayß",
  //     "title": "„Zeiten des Umbruchs“ im Kino: Schule des Lebens mit Donald Trump",
  //     "description": "Eine jüdische Familie in New York: James Grays autobiografischer Jugendfilm „Zeiten des Umbruchs“ hält einige unangenehme Wahrheiten über Amerika bereit.",
  //     "url": "https://www.tagesspiegel.de/kultur/zeiten-des-umbruchs-im-kino-schule-des-lebens-mit-donald-trump-8914159.html",
  //     "urlToImage": "https://www.tagesspiegel.de/images/003atfp00002rjpg/alternates/BASE_16_9_W1400/003atfp00002rjpg.jpeg",
  //     "publishedAt": "2022-11-23T18:57:03+00:00",
  //     "content": "In manchen Filmen fühlt man sich sofort heimisch. Sie legen sich wie eine wärmende Decke um die Seele. Auch in Zeiten des Umbruchs scheinen zunächst alle Zutaten versammelt, die zu einer vertrauten C… [+6387 chars]"
  //   },
  //   {
  //     "source": { "id": "cnn-es", "name": "CNN Spanish" },
  //     "author": "CNN",
  //     "title": "ANÁLISIS | Una cifra preocupante en las encuestas para Donald Trump",
  //     "description": "Donald Trump quiere ser candidato a la presidencia. Pero según una nueva encuesta nacional de la Universidad de Quinnipiac, mucha gente desearía que no lo fuera.",
  //     "url": "https://cnnespanol.cnn.com/2022/11/23/analisis-cifra-preocupante-encuestas-donald-trump-trax/",
  //     "urlToImage": "https://cnnespanol.cnn.com/wp-content/uploads/2022/11/221116101631-09-trump-announcement-1115.jpg?quality=100&strip=info",
  //     "publishedAt": "2022-11-23T18:28:50Z",
  //     "content": "¿Qué hay detrás del anuncio de Trump para 2024? 3:20\r\n(CNN) -- Donald Trump quiere ser candidato a la presidencia. Pero según una nueva encuesta nacional de la Universidad de Quinnipiac, mucha gente … [+2553 chars]"
  //   },
  //   {
  //     "source": { "id": "breitbart-news", "name": "Breitbart News" },
  //     "author": "Breitbart News",
  //     "title": "Breitbart News Daily Podcast Ep. 268: Will Alejandro Mayorkas Be Impeached? Guest: Liz Harrington of the Trump 2024 Campaign",
  //     "description": "Trump 2024 Spokeswoman Liz Harrington explains Donald Trump's strategy to win back the White House.",
  //     "url": "https://www.breitbart.com/podcast/2022/11/23/breitbart-news-daily-podcast-ep-268-will-alejandro-mayorkas-be-impeached-guest-liz-harrington-of-the-trump-2024-campaign/",
  //     "urlToImage": "https://media.breitbart.com/media/2022/11/BND-POD-DTC-640x480-1-640x335.jpg",
  //     "publishedAt": "2022-11-23T18:25:36Z",
  //     "content": "Breitbarts Jerome Hudson, filling in for host Alex Marlow, opens todays podcast with House Republican Leader Kevin McCarthys ultimatum to Bidens Department of Homeland Security Secretary Alejandro Ma… [+1288 chars]"
  //   },
  //   {
  //     "source": { "id": "the-huffington-post", "name": "The Huffington Post" },
  //     "author": "Liz Skalka",
  //     "title": "A Bunch Of Republicans Are (Quietly) Running Against Donald Trump",
  //     "description": "Trump was the first Republican to announce his 2024 presidential bid — but he'll soon be joined by Trump wannabes and people who've said he’s a “f***ing loser.”",
  //     "url": "https://www.huffpost.com/entry/donald-trump-gop-president-2024_n_637d16f1e4b0e771d9592391",
  //     "urlToImage": "https://img.huffingtonpost.com/asset/637bbdc12400001a009c6d2a.jpg?ops=1200_630",
  //     "publishedAt": "2022-11-23T17:37:03Z",
  //     "content": "The midterm elections are barely behind us, but Republicans are already looking ahead two years: To the next presidential election when theyll have the opportunity to retake the White House from Joe … [+8348 chars]"
  //   },
  //   {
  //     "source": { "id": "google-news", "name": "Google News" },
  //     "author": "Dan Mangan",
  //     "title": "Trump blasts Supreme Court over tax return ruling after a tough day in 3 other courts",
  //     "description": "Former President Donald Trump faces a series of court cases as he seeks the 2024 Republican nomination for the White House.",
  //     "url": "https://www.cnbc.com/2022/11/23/trump-blasts-supreme-court-over-tax-return-ruling-favoring-congress.html",
  //     "urlToImage": "https://image.cnbcfm.com/api/v1/image/107142147-1666904424778-tru.jpg?v=1669223412&w=1920&h=1080",
  //     "publishedAt": "2022-11-23T17:10:12+00:00",
  //     "content": "Former President Donald Trump lashed out Wednesday at the Supreme Court three of whose justices he appointed for unanimously rejecting his request to block a congressional committee from obtaining hi… [+5070 chars]"
  //   },
  //   {
  //     "source": { "id": "abc-news", "name": "ABC News" },
  //     "author": "Aaron Katersky",
  //     "title": "E. Jean Carroll to file 2nd lawsuit against Trump, her attorneys say",
  //     "description": "The suit will be filed when a new New York state law goes into effect Thursday.",
  //     "url": "https://abcnews.go.com/US/jean-carroll-file-2nd-lawsuit-trump-attorneys/story?id=93823590",
  //     "urlToImage": "https://s.abcnews.com/images/US/Carroll-gty-er-221122_1669160366374_hpMain_16x9_992.jpg",
  //     "publishedAt": "2022-11-23T16:07:21Z",
  //     "content": "Former Elle columnist E. Jean Carroll will file a new lawsuit against former President Donald Trump on Thanksgiving, the first day of New York's new Adult Survivors Act that allows adult victims of s… [+2234 chars]"
  //   },
  //   {
  //     "source": { "id": "msnbc", "name": "MSNBC" },
  //     "author": "Steve Benen",
  //     "title": "Why Donald Trump had such a terrible day in the courts",
  //     "description": "For the former president, a setback at the Supreme Court was a problem. A court hearing in the Mar-a-Lago scandal, however, was even more alarming.",
  //     "url": "https://www.msnbc.com/rachel-maddow-show/maddowblog/donald-trump-terrible-day-courts-rcna58506",
  //     "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-08/220824-donald-trump-cs-eb2211.jpg",
  //     "publishedAt": "2022-11-23T13:45:14Z",
  //     "content": "Donald Trump has received quite a bit of legal news lately, and none of it is good. It was less than a week ago, for example, that Attorney General Merrick Garland appointed a special counsel to over… [+4008 chars]"
  //   },
  //   {
  //     "source": { "id": "business-insider", "name": "Business Insider" },
  //     "author": "Sophia Ankel",
  //     "title": "How Ivanka Trump was shunned after joining Trump administration",
  //     "description": "Ivanka Trump said last week that she is no longer interested in working in politics and would like to focus on her family.",
  //     "url": "http://www.businessinsider.com/how-ivanka-trump-was-shunned-after-joining-trump-administration-2022-11",
  //     "urlToImage": "https://i.insider.com/637cd7fc2c8b9a0018cc103a?width=1200&format=jpeg",
  //     "publishedAt": "2022-11-23T13:05:11Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": "business-insider-uk",
  //       "name": "Business Insider (UK)"
  //     },
  //     "author": "Sophia Ankel",
  //     "title": "How Ivanka Trump was shunned after joining Trump administration",
  //     "description": "Ivanka Trump said last week that she is no longer interested in working in politics and would like to focus on her family.",
  //     "url": "http://uk.businessinsider.com/how-ivanka-trump-was-shunned-after-joining-trump-administration-2022-11",
  //     "urlToImage": "https://i.insider.com/637cd7fc2c8b9a0018cc103a?width=1200&format=jpeg",
  //     "publishedAt": "2022-11-23T13:05:11Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": "msnbc", "name": "MSNBC" },
  //     "author": null,
  //     "title": "Joe: Trump thought SCOTUS judges would be like Judge Cannon",
  //     "description": "The Supreme Court on Tuesday rejected former President Donald Trump's last-ditch plea to block the release of his tax records to House Democrats, paving the way for their possible disclosure to the lawmakers. The Morning Joe panel discusses.",
  //     "url": "https://www.msnbc.com/morning-joe/watch/joe-trump-thought-scotus-judges-would-be-like-judge-cannon-155041861993",
  //     "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/mpx/2704722219/2022_11/1669203544692_n_mj_second_221123_1920x1080-6gn498.jpg",
  //     "publishedAt": "2022-11-23T11:40:33Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": "newsweek", "name": "Newsweek" },
  //     "author": "Ewan Palmer",
  //     "title": "Donald Trump's Tax Returns at the Mercy of Leakers",
  //     "description": "Any leak of the documents set to be released to the Ways and Means Committee would have to take place within the next few weeks, before the GOP gains control of the House.",
  //     "url": "https://www.newsweek.com/trump-tax-returns-leak-house-scotus-1761661",
  //     "urlToImage": "https://d.newsweek.com/en/full/2153693/trump-tax-returns.jpg",
  //     "publishedAt": "2022-11-23T11:32:34Z",
  //     "content": "The Supreme Court decision to allow Donald Trump's tax returns to be handed over to a House committee will not result in the former president's financial records becoming public, unless there is a le… [+3629 chars]"
  //   },
  //   {
  //     "source": { "id": "msnbc", "name": "MSNBC" },
  //     "author": "Dean Obeidallah",
  //     "title": "Election deniers lost a lot of races, but still won too many",
  //     "description": "In the midterm elections, voters in key battleground states rejected Trump-endorsed election deniers running for secretary of state.",
  //     "url": "https://www.msnbc.com/opinion/msnbc-opinion/election-deniers-lost-lot-races-still-won-many-rcna57321",
  //     "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-11/221116--Kari-Lake-Mark-Finchem-Abe-Hamadeh-an-22b746.jpg",
  //     "publishedAt": "2022-11-23T11:00:00Z",
  //     "content": "The inspiring news from this months midterm elections at least for those of us who are fans of democracy is that voters in key battleground states rejected Trump-endorsed election deniers running for… [+5543 chars]"
  //   },
  //   {
  //     "source": { "id": "google-news", "name": "Google News" },
  //     "author": "Robert Katzberg",
  //     "title": "The Latest Mar-a-Lago Hearing Went Badly for Trump. It’s Likely to Only Get Worse for Him From Here.",
  //     "description": "The DOJ has good reason to believe its investigation—and an indictment—will proceed as planned.",
  //     "url": "https://slate.com/news-and-politics/2022/11/trump-mar-a-lago-documents-11th-circuit-cannon.html",
  //     "urlToImage": "https://compote.slate.com/images/11c8c450-38d1-4da3-8b43-7ca3c2fe735c.jpeg?crop=2000%2C1333%2Cx564%2Cy341&width=1560",
  //     "publishedAt": "2022-11-23T10:50:00+00:00",
  //     "content": "On Tuesday, a three-judge panel from the 11th Circuit Court of Appeals heard oral argument on the federal governments contention that Judge Aileen Cannon overstepped her authority in limiting the Jus… [+6924 chars]"
  //   },
  //   {
  //     "source": { "id": "abc-news", "name": "ABC News" },
  //     "author": "JILL COLVIN Associated Press",
  //     "title": "Trump's long-teased White House bid is low key in 1st week",
  //     "description": "Donald Trump has teased a third presidential campaign from the moment he left the White House",
  //     "url": "https://abcnews.go.com/Politics/wireStory/trumps-long-teased-white-house-bid-low-key-93844251",
  //     "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
  //     "publishedAt": "2022-11-23T10:37:10Z",
  //     "content": "NEW YORK -- From the moment he left the White House in defeat last year, Donald Trump has teased the prospect of a third presidential campaign. But in the week since he officially declared his candid… [+6153 chars]"
  //   },
  //   {
  //     "source": { "id": "wired", "name": "Wired" },
  //     "author": "Wired",
  //     "title": "Hate Speech is More Viral on Elon Musk's Twitter",
  //     "description": "Researchers monitoring a \"firehose\" of public tweets found signs of increasing toxicity—before Elon Musk reversed bans on Trump and other divisive figures.",
  //     "url": "https://www.wired.com/story/heres-proof-hate-speech-is-more-viral-on-elon-musks-twitter/",
  //     "urlToImage": "https://media.wired.com/photos/637c05a03bd3559b45ea0472/191:100/w_1280,c_limit/Hate-Speech-On-Twitter-Is-On-The-Rise-Business-1304822844.jpg",
  //     "publishedAt": "2022-11-22T23:13:38Z",
  //     "content": "Elon Musk reactivated Donald Trumps Twitter account last weekend, reversing a ban imposed in January 2021 after his posts were deemed to have incited violence at the US Capitol. Trump has not started… [+3341 chars]"
  //   },
  //   {
  //     "source": { "id": "msnbc", "name": "MSNBC" },
  //     "author": "Steve Benen",
  //     "title": "Supreme Court clears way for Dems to finally get Trump’s tax docs",
  //     "description": "Donald Trump hoped the Supreme Court would help him keep his tax returns hidden from congressional Democrats. That’s not what happened.",
  //     "url": "https://www.msnbc.com/rachel-maddow-show/maddowblog/supreme-court-clears-way-dems-finally-get-trumps-tax-docs-rcna58435",
  //     "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-11/221122-supreme-court-an-0f67c0.jpg",
  //     "publishedAt": "2022-11-22T20:47:28Z",
  //     "content": "Under existing law, a limited number of congressional leaders have the authority to access individual tax returns from the Treasury Department. In April 2019, Rep. Richard Neal, the Democratic chairm… [+2727 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-washington-times",
  //       "name": "The Washington Times"
  //     },
  //     "author": "Dave Boyer",
  //     "title": "Doubts emerge about the impartiality of DOJ special prosecutor Jack Smith unleashed on Donald Trump",
  //     "description": "Special counsel Jack Smith, chosen for his supposed nonpartisan qualifications to handle criminal probes of former President Donald Trump, is nevertheless linked to an anti-conservative scheme and pro-Democratic pursuits.",
  //     "url": "https://www.washingtontimes.com/news/2022/nov/22/doubts-emerge-about-impartiality-doj-special-prose/",
  //     "urlToImage": "https://twt-thumbs.washtimes.com/media/image/2022/11/19/trump_justice_department_21141_c0-261-3745-2445_s1200x700.jpg?e8828b49bf679e276ed612960016d3f1c36a437b",
  //     "publishedAt": "2022-11-22T15:01:10Z",
  //     "content": "Special counsel Jack Smith, chosen for his supposed nonpartisan qualifications to handle criminal probes of former President Donald Trump, is nevertheless linked to an anti-conservative scheme and pr… [+7123 chars]"
  //   },
  //   {
  //     "source": { "id": "le-monde", "name": "Le Monde" },
  //     "author": "Alexandre Piquard",
  //     "title": "La réactivation du compte Twitter de Donald Trump, une décision symbolique",
  //     "description": "L’ex-président américain, banni du réseau social après l’assaut violent du Capitole en janvier 2021, assure toutefois ne pas vouloir y faire son retour.",
  //     "url": "https://www.lemonde.fr/economie/article/2022/11/21/la-reactivation-du-compte-twitter-de-donald-trump-une-decision-symbolique_6150865_3234.html",
  //     "urlToImage": "https://img.lemde.fr/2022/11/20/0/63/3874/2583/1440/960/60/0/23fc4f0_5787814-01-06.jpg",
  //     "publishedAt": "2022-11-21T09:05:31Z",
  //     "content": "« Le peuple a parlé. Trump sera rétabli. Vox Populi, Vox Dei. » Cest ainsi quElon Musk a justifié, dimanche 20 novembre, la décision de réactiver le compte Twitter de lex-président américain, suspend… [+2444 chars]"
  //   },
  //   {
  //     "source": { "id": "recode", "name": "Recode" },
  //     "author": "Shirin Ghaffary",
  //     "title": "Donald Trump returns to Twitter thanks to Elon Musk",
  //     "description": "Twitter’s new owner and CEO is reversing Trump’s permanent suspension after conducting a poll via tweet.",
  //     "url": "https://www.vox.com/recode/2022/11/19/23468634/trump-twitter-elon-musk-ban-allowed-back-president-2024",
  //     "urlToImage": "https://cdn.vox-cdn.com/thumbor/53D_A0ll16aJLL-D3pN8tf0sg5s=/0x175:3500x2007/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24212616/1244812332.jpg",
  //     "publishedAt": "2022-11-20T02:40:07Z",
  //     "content": "Donald Trump is allowed back on his longtime social media app of choice: Twitter. \r\nTwitters new CEO and owner, Elon Musk, announced the decision in a tweet on Saturday evening, in a reversal of the … [+2781 chars]"
  //   },
  //   {
  //     "source": { "id": "national-review", "name": "National Review" },
  //     "author": "Rich Lowry",
  //     "title": "Don’t Count Trump Out Yet",
  //     "description": "The party won’t decide to turn against Trump until voters give it clear, unmistakable permission.",
  //     "url": "https://www.nationalreview.com/2022/11/dont-count-trump-out-yet/",
  //     "urlToImage": "https://www.nationalreview.com/wp-content/uploads/2022/09/donald-trump-rally-1.jpg?fit=2057%2C1200",
  //     "publishedAt": "2022-11-15T11:30:32Z",
  //     "content": null
  //   }
  // ]
  constructor() {
    super();
    // constructor only runs whenm there is a super() object
    console.log("this prints first constructor()");
    this.state = {
      // this.state is settting state
      // articles: this.articles,
      // set state using setState
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    // after render() loads componentDidMount() renders
    console.log("this prints third componentDidMount()");

    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a816dd9be27b436f99b645d3be07b1a3&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    // fetch return promise
    console.log(data);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles, 
        totalResults: parseData.totalResults,
      loading: false });
  }

  handlePrevClick = async () => {
    console.log("previous");
    // inside previous state will change
    // state.page will change   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a816dd9be27b436f99b645d3be07b1a3&page=${this.state.page - 1
      }&pagesize=${this.props.pageSize}`;
    this.setState({loading: true})
    
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

      // console.log("Next");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a816dd9be27b436f99b645d3be07b1a3&page=${this.state.page + 1
        }&pagesize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false,
      });
    }
  };

  render() {
    console.log("this prints second render()");

    return (
      <div className="container my-3">
        <h1 className="text-center">News React - top headline</h1>
        {this.state.loading && <Spinner />}
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
        <div className="row">
          {!this.state.loading &&  this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                {/* <Newsitem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://images.unsplash.com/photo-1669173732969-66f67d37f3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Qm4tRGpyY0Jyd298fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  }
                  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
