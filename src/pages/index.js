import * as React from "react";
import '../styles/theme.scss';

import Button from "../components/atoms/Button";
import Label from "../components/atoms/Label";
import Input from '../components/atoms/Input';
import Layer from '../components/atoms/layer.js';
import Logo from '../components/molecules/logo.js';
import VerticalSlider from "../components/molecules/VerticalSlider";
import Layout from "../components/molecules/layout";
import ShowcaseMolecule from "../components/molecules/ShowcaseMolecule";
import ShowcaseOrganism from "../components/organisms/ShowcaseOrganism";

import templateImage from '../images/template.png';
import fiveStages from '../images/five-stages.png';
import page_mock1 from '../images/page_mock1.png';
import page_mock2 from '../images/page_mock2.png';
import page_mock3 from '../images/page_mock3.png';

// markup
const IndexPage = () => {
  return (
    <main>
      <VerticalSlider>
        <Layer
          className={'primary-bg flex flex-j-center flex-a-center flex-col'}
          active
        >
          <Logo className='mb-5' />
          <h1 class='light-txt'>Atomic Design</h1>
        </Layer>
        <Layer
          className={'light-bg flex flex-a-center'}
        >
          <div className='flex-6 flex flex-j-center'>
              <Logo color='tertiary' />
          </div>
          <div className='flex-6'>
            <h1>Designing Systems</h1>

            <div class='mb-4'>
              <blockquote>"The page has been with us for a long time now. A few millennia, actually. The first books were thick slabs of clay created about 4,000 years ago..."</blockquote>
             <blockquote>Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner.</blockquote>
            </div>

            <h4>Why and how of design systems</h4>
            <ul>
              <li>To create a manageable strategy through an iterative process</li>
              <li>Modularizing content</li>
              <li>Systematic UI design</li>
              <li>Style Guides</li>
            </ul>

            <h4>Key Terms</h4>
            <ul>
              <li>Design System</li>
              <li>Modularity</li>
              <li>Atoms</li>
              <li>Molecules</li>
              <li>Organisms</li>
              <li>Templates</li>
              <li>Pages</li>
            </ul>
          </div>
        </Layer>
        <Layer
          className={'quartery-bg'}
        >
          <Layout
            header='Atoms'
            quote='If atoms are the basic building blocks of matter, then the atoms of our interfaces serve as the foundational building blocks that comprise all our user interfaces. These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.'
          >
            <div className='flex flex-j-between flex-self-center showcase'>
              <div>
                <h4>Label:</h4>
                <Label />
              </div>
              <div>
                <h4>Input:</h4>
                <Input />
              </div>
              <div>
                <h4>Button:</h4>
                <Button />
              </div>
            </div>
            <div class='flex'>
                <div class=''>
                    <h4>Basic Web UI Elements</h4>
                    <ul>
                        <li>Text</li>
                        <li>Buttons</li>
                        <li>Media</li>
                        <li></li>
                    </ul>
                </div>
                {/* <div class=''>
                    <h4></h4>
                </div> */}
            </div>
          </Layout>
        </Layer>
        <Layer
          className={'secondary-alt-bg flex'}
        >
          <Layout
            header='Molecules'
            quote='In interfaces, molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.'
          >
            <div className='mb-5 showcase'>
              <h4>Input Molecule:</h4>
              <ShowcaseMolecule />
            </div>
            <div className='showcase'>
              <h4>Input Molecule (Vertical):</h4>
              <ShowcaseMolecule vertLayout />
            </div>
          </Layout>
        </Layer>
        <Layer
          className={'secondary-bg flex'}
        >
          <Layout
            header='Organisms'
            quote='Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.'
          >
            <ShowcaseOrganism />
            <ShowcaseOrganism theme='light' />
            <ShowcaseOrganism theme='primary' />
          </Layout>
        </Layer>
        <Layer className={'dark-bg light-txt flex'}>
          <Layout
            header='Templates'
            quote='Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure. To build on our previous example, we can take the header organism and apply it to a homepage template.'
          >
            <img className='w-100' src={templateImage} />
          </Layout>
        </Layer>
        <Layer className={'primary-alt-bg flex'}>
          <Layout
            header='Pages'
            quote='Pages are specific instances of templates that show what a UI looks like with real representative content in place. Building on our previous example, we can take the homepage template and pour representative text, images, and media into the template to show real content in action.'
          >
            <div className='flex'>
                <div>
                    <img src={page_mock1} />
                </div>
                <div>
                    <img src={page_mock2} />
                </div>
                <div>
                    <img src={page_mock3} />
                </div>
            </div>
          </Layout>
        </Layer>
        <Layer className='light-bg'>
          <Layout
              header='Summary'
              quote='So that’s atomic design! These five distinct stages concurrently work together to produce effective user interface design systems. To sum up atomic design in a nutshell:'
            >
              <div class='w-100 flex flex-j-center'>
                <img src={fiveStages} />
              </div>
              <h4>The 5 Stages:</h4>
              <ul>
                <li>Atoms are UI elements that can’t be broken down any further and serve as the elemental building blocks of an interface.</li>
                <li>Molecules are collections of atoms that form relatively simple UI components.</li>
                <li>Organisms are relatively complex components that form discrete sections of an interface.</li>
                <li>Templates place components within a layout and demonstrate the design’s underlying content structure.</li>
                <li>Pages apply real content to templates and articulate variations to demonstrate the final UI and test the resilience of the design system.</li>
              </ul>
            </Layout>
        </Layer>
        <Layer
          className={'dark-bg flex flex-j-center flex-a-center flex-col'}
          active
        >
          <Logo className='mb-5' color='primary-alt' />
          <h1 class='light-txt'>Thank you!</h1>
        </Layer>
      </VerticalSlider>
    </main>
  )
}

export default IndexPage;
