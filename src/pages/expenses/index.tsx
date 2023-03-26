// import './index.module.css'
import styles from "../index.module.css";
export default function Home() {
    return (

      <div id="transactionsTab">
        <div className="Header">
          <h2 className="recent">Recent Transactions</h2>
          <a className="allTrans">All Transactions ></a>
        </div>

        <div className="columnTitles">
          
          <div className="nameDate">
            <p className="name">Name</p>

            <p className="date">Date</p>
          </div>

          <div className="catAmount">
            <p className="category">Category </p>

            <p className="amount">Amount</p>
          </div>
        </div>

        <div className="transactions">
          <div className="transDesc">
            <p className="title">Netflix and Chill</p>
            <p className="date">2023-03-15</p>
          </div>
          <div className="transCatAmount">
            <div className="transCat">Misc</div>  
            <div className="transAmnt">-$9.99</div>
          </div>
        </div>

      </div>
    );
  }
  