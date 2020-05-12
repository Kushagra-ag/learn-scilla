export const table1 = (v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,cl,bl) => {

	return (`
		<table class="table table-borderless">
		    <thead>
		      <tr>
		        <th>Summary</th>
		        <th> Block #${bl}</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr class='${cl?'selected':''}'>
		        <td>Number of Transactions</td>
		        <td>${v1}</td>
		      </tr>
		      <tr>
		        <td>Output Total</td>
		        <td>${v2}</td>
		      </tr>
		      <tr>
		        <td>Estimated Transaction Volume</td>
		        <td>${v3}</td>
		      </tr>
		      <tr>
		        <td>Transaction Fees</td>
		        <td>${v4}</td>
		      </tr>
		      <tr>
		        <td>Height</td>
		        <td>${v5}</td>
		      </tr>
		      <tr>
		        <td>Timestamp</td>
		        <td>${v6}</td>
		      </tr>
		      <tr>
		        <td>Received Time</td>
		        <td>${v7}</td>
		      </tr>
		      <tr>
		        <td>Replayed By</td>
		        <td>${v8}</td>
		      </tr>
		      <tr>
		        <td>Difficulty</td>
		        <td>${v9}</td>
		      </tr>
		      <tr>
		        <td>Bits</td>
		        <td>${v10}</td>
		      </tr>
		      <tr>
		        <td>Size</td>
		        <td>${v11}</td>
		      </tr>
		      <tr>
		        <td>Weight</td>
		        <td>${v12}</td>
		      </tr>
		      <tr>
		        <td>Version</td>
		        <td>${v13}</td>
		      </tr>
		      <tr>
		        <td>Nonce</td>
		        <td>${v14}</td>
		      </tr>
		      <tr>
		        <td>Block Rewards</td>
		        <td>${v15}</td>
		      </tr>
		    </tbody>
		</table>
		`)
};

export const table2 = (v1,v2,v3,v4,cl) => {

	return(`
		<table class="table table-borderless table2">
		    <thead>
		      <tr>
		        <th>Hashes</th>
		        <th></th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr class='${cl?'selected':''}'>
		        <td>Hash</td>
		        <td class='value'>${v1||''}</td>
		      </tr>
		      <tr>
		        <td>Previous Block</td>
		        <td class='value'>${v2||''}</td>
		      </tr>
		      <tr>
		        <td>Next Block(s)</td>
		        <td class='value'>${v3||''}</td>
		      </tr>
		      <tr>
		        <td>Merkle Root</td>
		        <td class='value'>${v4||''}</td>
		      </tr>
		    </tbody>
		</table>
		`)
}

export const table3 = (v1,v2,v3,v4,v5,v6) => {

	return(`
		<table class="table table-borderless">
		    <thead>
		      <tr>
		        <th>Summary</th>
		        <th> </th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <td>Size</td>
		        <td>${v1}</td>
		      </tr>
		      <tr>
		        <td>Weight</td>
		        <td>${v2}</td>
		      </tr>
		      <tr>
		        <td>Received Time</td>
		        <td>${v3}</td>
		      </tr>
		      <tr>
		        <td>Reward from Block</td>
		        <td>${v4}</td>
		      </tr>
		      <tr>
		        <td>Scripts</td>
		        <td>${v5}</td>
		      </tr>
		      <tr>
		        <td>Visualize</td>
		        <td>${v6}</td>
		      </tr>
		    </tbody>
		</table>
		`)
}