import React from 'react';
import { fetchReports } from '../actions/reportsActions';
import { connect } from 'react-redux';

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reportTitle: '',
            reportSummary: '',
            reportLinks: []
        }
    }

    componentDidMount() {
        this.props.fetchReports()
    }

    reportClick(index) {
        this.setState({
            reportTitle: this.props.localReports[index].reportTitle,
            reportSummary: this.props.localReports[index].reportText,
            reportLinks: this.props.localReports[index].reportLinks
        })
    }

    fileExtension(file) {
        var extension = file.substr(file.lastIndexOf('.') + 1);

        switch (extension) {
            case 'pdf':
                return (<i class="fas fa-file-pdf"></i>);
            case 'jpg':
                return (<i class="fas fa-file-image"></i>);
            case 'png':
                return (<i class="fas fa-file-image"></i>);
            case 'tiff':
                return (<i class="fas fa-file-image"></i>);
            case 'bmp':
                return (<i class="fas fa-file-image"></i>);
            case 'txt':
                return (<i class="fas fa-file-word"></i>);
            case 'docx':
                return (<i class="fas fa-file-word"></i>);
            case 'html':
                return (<i class="fas fa-file-code"></i>);
            case 'py':
                return (<i class="fas fa-file-code"></i>);
            case 'js':
                return (<i class="fas fa-file-code"></i>);
            case 'json':
                return (<i class="fas fa-file-code"></i>);
            case 'xml':
                return (<i class="fas fa-file-code"></i>);
            default:
                return (<i class="fas fa-file-alt"></i>);
        }
    }

    render() {

        const reportNav = this.props.localReports.map((report, index) => (
            <div key={report.reportId} className="wh-timeline-reports-wgt">
                <span className="wh-timeline-wgt-date">{report.reportDate}</span>
                <span className="wh-timeline-wgt-title">{report.reportTitle}</span>
                <span className="wh-timeline-wgt-open btn" onClick={() => this.reportClick(index)}>
                    <i className="fas fa-external-link-square-alt"></i>
                </span>
            </div>
        ))

        const linkWdgts = this.state.reportLinks.map(link => (
            <a target='_blank' href={link} className="wh-reportField-links-file">
                {this.fileExtension(link)}
            </a>
        ))

        return (
            <div>
                <section className="section wh-report-container">
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="wh-report-timeline">
                                <div className="wh-timeline">
                                    <div className="wh-timeline-title">
                                        <div className="row">
                                            <div className="col s6">
                                                <div className="wh-timeline-title-title">Timeline</div>
                                            </div>
                                            <div className="col s6">
                                                <div className="btn wh-timeline-title-add">
                                                    <i className="fas fa-plus-square"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wh-timeline-reports">
                                        {reportNav}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m8">
                            <div className="wh-report-report">
                                <div className="wh-reportField">
                                    <div className="wh-reportField-title">
                                        {this.state.reportTitle}
                                    </div>
                                    <div className="wh-reportField-summary">
                                        {this.state.reportSummary}
                                    </div>
                                    <div className="wh-reportField-links">
                                        {linkWdgts}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    localReports: state.reports.data
});

export default connect(mapStateToProps, { fetchReports })(Reports);