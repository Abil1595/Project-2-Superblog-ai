import bg from './logo.jpg';
import React, { useState } from 'react';
import {Outlet,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Col,Row} from 'reactstrap';
import {NavItem,NavLink,DropdownMenu,DropdownItem,NavbarToggler,NavbarBrand,Collapse,Button} from 'reactstrap';
import bg1 from './image1.png';
import bg2 from './new121.png';
import bg3 from './new13.png';
import bg4 from './new15.png';
import bg5 from './new16.png';
import bg6 from './new18.png';
import bg7 from './new19.png';
import bg8 from './new20.png';
import bg9 from './new21.webp';
import bg10 from './new22.png';
function X1()
{
	const [a,b]=useState(false); 
	const c=()=>b(!a);
  
	return(
    
	<>
  
    <Navbar bg="white" expand="sm" className="navbar navbar-expand-sm navbar-light bg-light fixed-top" style={{ 'background': 'transparent' }}>
      <NavbarBrand><img src={bg} class="abi1"/>
</NavbarBrand>

        <NavbarToggler onClick={c}/>
        
     <Collapse isOpen={a} navbar> 
     <Nav className="mt-auto" navbar>
     <NavItem><NavLink><h5 class="hov" style={{'padding':'10px','font-size':'18px'}}>Home</h5></NavLink></NavItem>
     <NavItem ><NavLink><h5 class="hov" style={{'padding':'10px','font-size':'18px'}}>Showcase</h5></NavLink></NavItem>
      <NavItem><NavLink><h5 class="hov" style={{'padding':'10px','font-size':'18px'}}>Blog</h5></NavLink></NavItem>
      <NavItem><NavLink><h5 class="hov" style={{'padding':'10px','font-size':'18px'}}>Contact</h5></NavLink></NavItem>
      <NavItem><NavLink style={{'padding':'10px'}}><Button style={{'background':'green'}}>Try Superblog for Free</Button></NavLink></NavItem>
     </Nav>
     </Collapse>
     </Navbar><br/><br/><br/><br/>
      <Row>
      <Col sm={2}>
     
      </Col>
       <Col sm={8}>
       <div class="a1">
       <h1 style={{'font-size':'50px','text-align':'center'}}>SEO, Writing, & Blogging Tips</h1>
       <center><h4 style={{'color':'#848484'}}>Everything you need to know about blogging</h4></center>
       </div>
      </Col>
       <Col sm={2}>
      
      </Col>
      </Row><br/><br/>
      <div class="a2">
      <center>
      <button class="a6">AllPosts</button>    Al Tools  Comparison    SEO
      </center>
      </div><br/><br/>
      <Row>
      <Col sm={2}>

      </Col>
      <Col sm={4}>
     <center><img src={bg1} class="a3"/ ></center>
      </Col>
      <Col sm={4}>
      <div class="a4">
        <h4 style={{'color':'#121212'}}>Critical WordPress LiteSpeed Plugin Flaw Endangers 4 Million Sites</h4>
        <p style={{'color':'#848484'}}>WordPress is notorious for slow speeds if not properly optimized. So, WordPress users install variou.. </p>
        <button class="a5">NEWS</button><br/><br/>
        <p> Sai Krishna · Oct 30, 2023 · 2 min read</p>
        </div>
      </Col>
      <Col sm={2}>

      </Col>
      </Row>
      <Row>
      <Col sm={2}>

      </Col>
      <Col sm={3}>
     <img src={bg2} class="a7"/>
     <div class="a9">
   <h5 style={{'font-weight':'bold'}}> 5 Beautiful font combinations for<br/> your blog<br/><button class="a11">TIPS</button><br/>

</h5><p>Sai Krishna · Sep 15, 2023 · 1 min read</p>
</div>
      </Col>
      <Col sm={3}>
    <img src={bg3} class="a8"/>
    <div class="a9">
   <h5 style={{'font-weight':'bold'}}> Adobe Fund backs ⚡Superblog
<br/> <br/><button class="a11">News</button><br/>

</h5><p> Superblog Team · Mar 20, 2023 · 2 min read</p>
   </div>
      </Col>
      <Col sm={3}>
     <img src={bg4} class="a10"/>
     <div class="a9">
   <h5 style={{'font-weight':'bold'}}> Customizing your Superblog with Custom CSS and JS
<br/> <br/><button class="a13">Random</button><br/>

</h5><p> Sai Krishna · Mar 2, 2023 · 2 min read</p>
   </div>
      </Col>
      <Col sm={1}>

      </Col>
      </Row><br/>
      <Row>
      <Col sm={2}>

      </Col>
      <Col sm={3}>
     <img src={bg5} class="a12"/>
     <div class="a9">
   <h5 style={{'font-weight':'bold'}}> Grow your blog audience & increase website traffic: A definitive guide! <br/><button class="a11">SEO</button><br/>

</h5><p> Sai Krishna · Feb 20, 2023 · 12 min read</p>
</div>
      </Col>
      <Col sm={3}>
    <img src={bg6} class="a14"/>
    <div class="a9">
   <h5 style={{'font-weight':'bold'}}> How Paraphraser.io can be your AI Writing Assistant?
<br/> <button class="a13"> AITOOLS</button><br/>

</h5><p> Sai Krishna · May 23, 2022 · 5 min read</p>
   </div>
      </Col>
      <Col sm={3}>
     <img src={bg7} class="a10"/>
     <div class="a9">
   <h5 style={{'font-weight':'bold'}}> Here are the common SEO problems that are often overlooked and their solutions (2023)
<br/> <br/><button class="a11">TIPS</button><br/>

</h5><p> Sai Krishna · May 4, 2022 · 5 min read</p>
   </div>
      </Col>
      <Col sm={1}>

      </Col>
      </Row><br/>
      <Row>
      <Col sm={2}>

      </Col>
      <Col sm={3}>
     <img src={bg8} class="a12"/><div class="a9">
   <h5 style={{'font-weight':'bold'}}> Ghost vs WordPress vs Superblog: Which is better for SEO and Performance? (2023) <br/><br/><button class="a15">COMPARISON</button><br/>

</h5><p> Sai Krishna · Apr 22, 2022 · 8 min read</p>
</div>
      </Col>
      <Col sm={3}>
    <img src={bg9} class="a14"/>
    <div class="a9">
   <h5 style={{'font-weight':'bold'}}> How to add a blog to Shopify store: 3 Easy ways
<br/> <button class="a11"> BLOG</button><br/>

</h5><p> Sai Krishna · Mar 7, 2022 · 3 min read</p>
   </div>
      </Col>
      <Col sm={3}>
     <img src={bg10} class="a10"/>
     <div class="a9">
   <h5 style={{'font-weight':'bold'}}> The ultimate list of NoCode SaaS tools to build your next startup
<br/> <br/><button class="a13">NOCODE</button><br/>

</h5><p> Sai Krishna · May 4, 2022 · 5 min read</p>
   </div>
      </Col>
      <Col sm={1}>

      </Col>
      </Row><br/><br/>
      <center><Button style={{'background':'green','font-size':'18px'}}>View Older Posts</Button></center><br/>
      <Row>
      <Col sm={3}></Col>
      <Col sm={6}>
      <div class="a16">
      <h2 style={{'color':'black','font-weight':'bold'}}>Want an SEO-focused and blazing fast<br/> blog?</h2><br/>
<h6>Superblog let's you focus on writing content instead of optimizations.</h6>
    <br/><input type="text" placeholder="Your Phone" style={{'border':'rgb(67 183 48 / 10%)','width':'35%','height':'40px'}}/>  <Button style={{'background':'#43b730'}}>Signup</Button>
    </div>
    </Col>
    <Col sm={3}></Col>
    </Row><br/><br/><br/>
    <Row style={{'background':'#f7fafc'}}>
    <Col sm={3}>
    <div class="abi2">
    <img src={bg}/><br/><br/>
    <p>All rights reserved © 2024</p>
    </div>
    </Col>
    <Col sm={2} style={{'padding':'30px'}}>
    <div class="b1">
    <h5>Product</h5><br/>
Features<br/><br/>
Pricing<br/><br/>
FAQ<br/><br/>
Blog<br/><br/>
Supershots<br/><br/>
AI Post Outline Generator<br/><br/>
SEO Analyzer Tool<br/><br/>
Featured Image Creator<br/><br/><br/><br/>
<h5>Blog</h5><br/>

All Posts<br/><br/>
Search<br/><br/>
Topics
</div>
    </Col>
    <Col sm={2} style={{'padding':'30px'}}>
    <div class="b1">
    <h5>Comparisons</h5><br/>

WordPress vs Superblog<br/><br/>
Ghost vs Superblog<br/><br/>
Medium vs Superblog<br/><br/>
WordPress vs Ghost vs Superblog<br/><br/>
Which platform to Choose

  </div>
    </Col>
     
    <Col sm={2} style={{'padding':'30px'}}>
    <div class="b1">
    <h5>Use Cases</h5><br/>

For Carrd Sites<br/><br/>
For Bubble Apps<br/><br/>
For Startups<br/><br/>
For Swipe Pages<br/><br/>
For Webflow Sites<br/><br/>
For Agencies

   </div>
    </Col>
   
    </Row>
    <Outlet/>
   </>
   
		);
}
export default X1; 