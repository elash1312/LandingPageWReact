import React from "react";

const data = {
	title: "This is a Card Title",
	image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAFFCAYAAAAaQB9aAAAAAXNSR0IArs4c6QAAHApJREFUeF7t3eey2zYCBlA5vffee33/t8hfpzg9cRKn9952vjtLD41QIlUA6+IeznicWUsAcYDVR4Dt3GuvvfbvykaAAAECBAicaoFzAv1U95+dJ0CAAAECJwIC3UAgQIAAAQIdCAj0DjpREwgQIECAgEA3BggQIECAQAcCAr2DTtQEAgQIECAg0I0BAgQIECDQgYBA76ATNYEAAQIECAh0Y4AAAQIECHQgINA76ERNIECAAAECAt0YIECAAAECHQgI9A46URMIECBAgIBANwYIECBAgEAHAgK9g07UBAIECBAgINCNAQIECBAg0IGAQO+gEzWBAAECBAgIdGOAAAECBAh0ICDQO+hETSBAgAABAgLdGCBAgAABAh0ICPQOOlETCBAgQICAQDcGCBAgQIBABwICvYNO1AQCBAgQICDQjQECBAgQINCBgEDvoBM1gQABAgQICHRjgAABAgQIdCAg0DvoRE0gQIAAAQIC3RggQIAAAQIdCAj0DjpREwgQIECAgEA3BggQIECAQAcCAr2DTtQEAgQIECAg0I0BAgQIECDQgYBA76ATNYEAAQIECAh0Y4AAAQIECHQgINA76ERNIECAAAECAt0YIECAAAECHQgI9A46URMIECBAgIBANwYIECBAgEAHAgK9g07UBAIECBAgINCNAQIECBAg0IGAQO+gEzWBAAECBAgIdGOAAAECBAh0ICDQO+hETSBAgAABAgLdGCBAgAABAh0ICPQOOlETCBAgQICAQDcGCBAgQIBABwICvYNO1AQCBAgQICDQjQECBAgQINCBgEDvoBM1gQABAgQICHRjgAABAgQIdCAg0DvoRE0gQIAAAQIC3RggQIAAAQIdCAj0DjpREwgQIECAgEA3BggQIECAQAcCAr2DTtQEAgQIECAg0I0BAgQIECDQgYBA76ATNYEAAQIECAh0Y4AAAQIECHQgINA76ERNIECAAAECAt0YIECAAAECHQgI9A46URMIECBAgIBANwYIECBAgEAHAgK9g07UBAIECBAgINCNAQIECBAg0IGAQO+gEzWBAAECBAgIdGOAAAECBAh0ICDQO+hETSBAgAABAgLdGCBAgAABAh0ICPQOOlETCBAgQICAQDcGCBAgQIBABwICvYNO1AQCBAgQICDQjQECBAgQINCBgEDvoBM1gQABAgQICHRjgAABAgQIdCAg0DvoRE0gQIAAAQIC3RggQIAAAQIdCAj0DjpREwgQIECAgEA3BggQIECAQAcCAr2DTtQEAgQIECAg0I0BAgQIECDQgYBA76ATNYEAAQIECAh0Y4AAAQIECHQgINA76ERNIECAAAECAt0YIECAAAECHQgI9A46URMIECBAgIBANwYIECBAgEAHAgK9g07UBAIECBAgINCNAQIECBAg0IGAQO+gEzWBAAECBAgIdGOAAAECBAh0ICDQO+hETSBAgAABAgLdGCBAgAABAh0ICPQOOlETCBAgQICAQDcGCBAgQIBABwICvYNO1AQCBAgQICDQjQECBAgQINCBgEDvoBM1gQABAgQICHRjgAABAgQIdCAg0DvoRE0gQIAAAQIC3RggQIAAAQIdCAj0DjpREwgQIECAgEA3BggQIECAQAcCAr2DTtQEAgQIECAg0I0BAgQIECDQgYBA76ATNYEAAQIECAh0Y4AAAQIECHQgINA76ERNIECAAAECAt0YIECAAAECHQgI9A46URMIECBAgIBANwYIECBAgEAHAgK9g07UBAIECBAgINCNAQIECBAg0IGAQO+gEzWBAAECBAgIdGOAAAECBAh0ICDQO+hETSBAgAABAgLdGCBAgAABAh0ICPQOOlETCBAgQICAQDcGCBAgQIBABwICvYNO1AQCBAgQICDQjQECBAgQINCBgEDvoBM1gQABAgQICHRjgAABAgQIdCAg0DvoRE0gQIAAAQIC3RggQIAAAQIdCAj0DjpREwgQIECAgEA3BggQIECAQAcCAr2DTtQEAgQIECAg0I0BAgQIECDQgYBA76ATNYEAAQIECAh0Y4AAAQIECHQgINA76ERNIECAAAECAt0YIECAAAECHQgI9A46URMIECBAgIBANwYIECBAgEAHAgK9g07UBAIECBAgINCNAQIECBAg0IGAQO+gEzWBAAECBAgIdGOAAAECBAh0ICDQO+hETSBAgAABAgLdGCBAgAABAh0ICPQOOlETCBAgQICAQDcGCBAgQIBABwICvYNO1AQCBAgQICDQjQECBAgQINCBgEDvoBM1gQABAgQICHRjgAABAgQIdCAg0DvoxB6bcO21165eeuml1U033bR183777bfV+fPnZ7937733ru67777VzTffvEp9w/b333+vfv7559WXX365+u6772bLKT9w6623rh544IHV7bffvrruuutW586dO/nIP//8s/r9999X33zzzUnZqafH7a677lrdf//9q1tuueXEdWh/2vvHH3+svv7669Xnn3++ddNvuOGGE9c777xzlf++5pprLpcR25T9/fffr7744ouT/16yvfDCCyf9tO32559/rt5///3Vjz/+uO1XfZ5ANQGBXo1WwfsI5Ef7qaeeOgnEbbe5QE8YPPHEE6s77rjjcthM1fHvv/+ufvjhh9VHH320OCAeeeSRk9AZHyBMlZ1gv3jx4k4HDNt6tPp8Dr4ef/zxk4AcQnxd3Wn/p59+enJws2Rb6pqy/vrrr9WlS5dmDxqyv88999zqxhtvXLILV3xGoG9N5gsNBAR6A2RVbC+QUHz00UevmIUtLWVToOdH/Mknn1zddtttS4tb/fTTT6sPP/xwlXI3bTlIyKx/PHPc9PmEQkJ9aagt3uGr8MG4PvPMMyerHUu3zNg/+eSTk9WKTVsO7O65557Zg4RxGZmxZyUgB2Prtn0OGgX60l72uZYCAr2ltroWCyQcs2ybLTPlhOrSZdT82CYoprYyHPLDn2XahEqWT/Mjn2X4/D3MMlN/QveDDz5Yu//Z1xyAjGfmv/zyy8nyb5btr7/++pNyE/jjVYdff/119d57780eLCyGu0offP75509WPIYtrlndiNu33357cupkqv3p07iuW7rOzPzBBx+84iAps/uUmcDOQVZOcdx9993/sZ07YHjooYdWDz/88OWyc5pl7qBtaF/KzphZ+vmr1C2qPWMCAv2Mdfhpae44IPLjmZnWvjPZBMpjjz12OXQ3/eDnxz5/hoDOMu7HH388uQ/l7HTTAUCWo3OwMlwbkM9+9dVXG2eSx95nOZiJ67AyEdcseedPuU3N5NOvOR899dlnn332iusocpCQA6Cp6w+mys5B1YULFyY/n5WajInhoPGzzz5b5Y+NwGkVEOintec63+9XXnnl8vJtZnH5Ec8Map8t50sz8x5+wOeCNMGbH/xhpp6Z/DvvvPOfXShneptCJF/O8nHONQ8z9cw4E2j7tm8fm32+O3ZNOZk5b1rNSPtjOxwsrevf0nXJakb6N0GdFZFsWSnIaY2pZf3xQWMO2HLQmJm/jcBpFRDop7XnOt7vLN1m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",
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing // elit, sed do eiusmod tempor incididunt ut labore et // dolore magna aliqua.",
	buttonTitle: "Button Title",
};

const Cards = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm">
					<div className="card m-5 p-0 me-auto mb-2 mb-lg-0">
						<img
							className="card-img-top"
							src={data.image}
							alt="Card image cap"
						/>

						<div className="card-body">
							<h5 className="card-title">{data.title}</h5>
							<p className="card-text">{data.text}</p>
							<a href="#" className="btn btn-primary">
								{data.buttonTitle}
							</a>
						</div>
					</div>
				</div>

				<div className="col-sm">
					<div className="card m-5 p-0 me-auto mb-2 mb-lg-0">
						<img
							className="card-img-top"
							src={data.image}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{data.title}</h5>
							<p className="card-text">{data.text}</p>
							<a href="#" className="btn btn-primary">
								{data.buttonTitle}
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm">
					<div className="card m-5 p-0 me-auto mb-2 mb-lg-0">
						<img
							className="card-img-top"
							src={data.image}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{data.title}</h5>
							<p className="card-text">{data.text}</p>
							<a href="#" className="btn btn-primary">
								{data.buttonTitle}
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm">
					<div className="card m-5 me-auto mb-2 mb-lg-0">
						<img
							className="card-img-top"
							src={data.image}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{data.title}</h5>
							<p className="card-text">{data.text}</p>
							<a href="#" className="btn btn-primary">
								{data.buttonTitle}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Cards;