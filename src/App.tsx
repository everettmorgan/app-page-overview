import { Options, Vue } from 'vue-class-component';
import Btn from './components/Btn';
import Grid from './components/Grid';
import Flexbox from './components/Flexbox';

@Options({
  components: {
    Btn,
    Grid,
    Flexbox,
  },
  props: {
    name: String,
    logo: String,
    desc: String,
    rating: String,
    installLink: String,
    availablePlan: String,
    screenshots: Array,
  },
})
class App extends Vue {
  name!: string;

  logo!: string;

  desc!: string;

  rating!: string;

  ratingTotal!: string;

  installLink!: string;

  availablePlan!: string;

  screenshots!: string[];

  install() {
    if (window) {
      window.open(this.installLink, '_blank');
    }
  }

  render() {
    return (
      <Grid id="container" columns="repeat(2, 1fr)" rows="1fr" gap="0 150px">
        <Grid columns="1fr" rows="1fr 150px 100px" gap="0px">
          <Grid columns="max-content auto" rows="1fr" gap="0px">
            <Flexbox
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <img class="appLogo" src={this.logo}/>
            </Flexbox>
            <Flexbox alignItems="center">
              <h1 class="appName">{this.name}</h1>
            </Flexbox>
          </Grid>

          <Flexbox alignItems="center">
            <p class="appDesc">
              {this.desc}
            </p>
          </Flexbox>

          <Grid columns="1fr 1fr" rows="50px" gap="0px">
            <Flexbox justifyContent="center" flexDirection="column">
              <Grid columns="max-content max-content" class="appCardRating">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 329.942 329.942"
                  style="enable-background: new 0 0 329.942 329.942"
                  width="12"
                  height="100%"
                  fill="#f6ac3c"
                  class="ratingStar"
                >
                  <path
                    id="XMLID_16_"
                    d={
                      'M329.208,126.666c-1.765-5.431-6.459-9.389-12.109-10'
                      + '.209l-95.822-13.922l-42.854-86.837c-2.527-5.12-7.742-8.362-13.451-8.362c-'
                      + '5.71,0-10.925,3.242-13.451,8.362l-42.851,86.836l-95.825,13.922c-5.65,0.821'
                      + '-10.345,4.779-12.109,10.209c-1.764,5.431-0.293,11.392,3.796,15.377l69.339,6'
                      + '7.582L57.496,305.07c-0.965,5.628,1.348,11.315,5.967,14.671c2.613,1.899,5.708,'
                      + '2.865,8.818,2.865c2.387,0,4.784-0.569,6.979-1.723l85.711-45.059l85.71,45.059c2'
                      + '.208,1.161,4.626,1.714,7.021,1.723c8.275-0.012,14.979-6.723,14.979-15c0-1.152-'
                      + '0.13-2.275-0.376-3.352l-16.233-94.629l69.339-67.583C329.501,138.057,330.972,13'
                      + '2.096,329.208,126.666z'
                    }/>
                  <g/>
                  <g/>
                  <g/>
                  <g/>
                  <g/>
                  <g/>
                  <g/>
                  <g/>
                  <g/>
                  <g/>
                  <g/>
                  <g/>
                  <g/>
                  <g/>
                  <g/>
                </svg>
                <Flexbox alignItems="center">
                  <p class="ratingText">
                    {this.rating ?? ''} ({this.ratingTotal ?? 0})
                  </p>
                </Flexbox>
              </Grid>
              <p class="appPlan">{this.availablePlan} available</p>
            </Flexbox>
            <div>
              <Btn
                text="Install App"
                size="xl"
                color="duda"
                rounded="5"
                onClick={this.install}
              />
            </div>
          </Grid>
        </Grid>

        <Grid columns="1fr" rows="75% 25%" gap="0px">
          <div class="showcaseImage"/>

          <Grid
            class="showcaseImageList"
            columns="1fr 1fr 1fr"
            rows="1fr"
            gap="0 10px"
          >
            <div class="showcaseImage"/>
            <div class="showcaseImage"/>
            <div class="showcaseImage"/>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
