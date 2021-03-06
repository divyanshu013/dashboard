import React,{ Component } from 'react';
import { appbaseService } from '../../../service/AppbaseService';

export default class SortBy extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			value: appbaseService.sortBy.field
		};
		this.options = appbaseService.sortOptions;
	}

	handleChange(value) {
		this.setState({
			value
		}, this.applySort);
	}

	applySort() {
		this.props.registerApps(appbaseService.applySort(this.props.apps, this.state.value));
	}

	render() {
		return (
			<span className="ad-dropdown dropdown pull-right">
				<button className="dropdown-toggle" type="button" id="sortby-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					Sort by {this.options[this.state.value] || this.options["api_calls"]}&nbsp;&nbsp;<span className="caret"></span>
				</button>
				<ul className="ad-dropdown-menu dropdown-menu pull-right" aria-labelledby="sortby-menu">
					{
						Object.keys(this.options).map((item) => (
							<li key={item}><a onClick={() => this.handleChange(item)}>{this.options[item]}</a></li>
						))
					}
				</ul>
			</span>
		);
	}

}
