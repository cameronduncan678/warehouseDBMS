import React from 'react';
import { fetchReports, addNewReport } from '../actions/reportsActions';
import { connect } from 'react-redux';
import Modal from 'react-modal';

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reportTitle: '',
            reportSummary: '',
            reportLinks: [],
            showModal: false,
            newReportTitle: '',
            newReportSummary: '',
            newReportFiles: {},
        }

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchReports()
    }

    reportClick(index) {
        this.setState({
            reportTitle: this.props.localReports[index].reportTitle,
            reportSummary: this.props.localReports[index].reportText,
            reportLinks: this.props.localReports[index].links
        })
    }

    // Open the add item modal
    openModal = () => {
        this.setState({ showModal: true });
    }

    // Close the add item modal
    closeModal = () => {
        this.setState({ showModal: false });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onFileChange = event => {

        this.setState({ newReportFiles: event.target.files });
    }

    commitReport() {
        if (this.state.newReportTitle !== '' && this.state.newReportSummary !== '') {
            let today = new Date();

            let newReportObj = {
                reportTitle: this.state.newReportTitle,
                reportText: this.state.newReportSummary,
                reportAuthor: this.props.localUser.firstName + " " + this.props.localUser.lastName,
                reportFiles: this.state.newReportFiles
            }
            this.props.addNewReport(newReportObj);
            this.closeModal();
        }

    }

    fileExtension(file) {
        var extension = file.substr(file.lastIndexOf('.') + 1);

        switch (extension) {
            case 'pdf':
                return (<i className="fas fa-file-pdf"></i>);
            case 'jpg':
                return (<i className="fas fa-file-image"></i>);
            case 'png':
                return (<i className="fas fa-file-image"></i>);
            case 'tiff':
                return (<i className="fas fa-file-image"></i>);
            case 'bmp':
                return (<i className="fas fa-file-image"></i>);
            case 'txt':
                return (<i className="fas fa-file-word"></i>);
            case 'docx':
                return (<i className="fas fa-file-word"></i>);
            case 'html':
                return (<i className="fas fa-file-code"></i>);
            case 'py':
                return (<i className="fas fa-file-code"></i>);
            case 'js':
                return (<i className="fas fa-file-code"></i>);
            case 'json':
                return (<i className="fas fa-file-code"></i>);
            case 'xml':
                return (<i className="fas fa-file-code"></i>);
            default:
                return (<i className="fas fa-file-alt"></i>);
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
            <a target='_blank' href={link} rel="noopener noreferrer" className="wh-reportField-links-file">
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
                                                <div className="btn wh-timeline-title-add" onClick={this.openModal}>
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
                <Modal className="wh-newReport-modal" isOpen={this.state.showModal} overlayClassName="wh-modal-Overlay">
                    <div className="wh-newReport-space">
                        <div className="wh-newReport-form">
                            <div className="wh-newReport-input">
                                <label for="newReportTitle">Title</label>
                                <input type="text" name="newReportTitle" onChange={this.onChange}></input>
                            </div>
                            <div className="wh-newReport-summary">
                                <label for="newReportSummary">Summary</label>
                                <br></br>
                                <textarea className="wh-newReport-summary-text" name="newReportSummary" onChange={this.onChange}></textarea>
                            </div>
                            <div className="wh-newReport-input">
                                <label for="newReportFiles">Files</label>
                                <br></br>
                                <input className="wh-newReport-files" type="file" name="newReportFiles" multiple onChange={this.onFileChange}></input>
                            </div>
                            <div className="wh-newReport-btns">
                                <button className="wh-newReport-btns-commit" onClick={() => this.commitReport()}>Commit</button>
                                <button className="wh-newReport-btns-cancel" onClick={this.closeModal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </Modal>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    localReports: state.reports.data,
    localUser: state.user.data
});

export default connect(mapStateToProps, { fetchReports, addNewReport })(Reports);