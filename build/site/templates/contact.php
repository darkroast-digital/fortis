<?php snippet('header') ?>

<main class="main">

<?php snippet('nav') ?>

<header class="hero offpage-hero contact-hero">

    <ul class="hero-socials">
        <li><a href="https://www.facebook.com/thefortisgroup/?fref=ts"><i class="fa fa-facebook" target="_blank"></i></a></li>
        <li><a href="https://twitter.com/TheFortisGroup"><i class="fa fa-twitter" target="_blank"></i></a></li>
        <li><a href="https://www.linkedin.com/company/1392417?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A1392417%2Cidx%3A3-2-11%2CtarId%3A1485283024182%2Ctas%3Afortis%20grou"><i class="fa fa-linkedin" target="_blank"></i></a></li>
        <li><a href="https://www.youtube.com/channel/UC50BfE3X_6S_jGp1ZvhpNAw" target="_blank"><i class="fa fa-youtube"></i></a></li>
        <li><a href="https://www.instagram.com/fortisgroupinc/" target="_blank"><i class="fa fa-instagram"></i></a></li>
    </ul>

    <div class="borders">
        <div class="border-left"></div>
        <div class="border-right"></div>
        <div class="border-bottom"></div>
   </div>

    <div class="hero__content">
        <h1><span>Contact</span> Us</h1>
        <h6>Get in touch and learn how we can help build your future.</h6>
    </div>
    <div class="hero__content-background"></div>
</header>
    
<!-- End Hero -->

<section class="contact">
    
    <div class="contact-content">
        <aside>
            <h6>Get In Touch</h6>
            <h4>Contact Us Today</h4>
            <ul class="contact-details">
                <li>
                    <div class="contact-icon">
                    <img src="https://res.cloudinary.com/darkroast-digital/image/upload/v1510152415/fortis/contact-email.png" draggable="false">
                    </div>
                        <div class="contact-info">
                        <h6>Email</h6>
                        <a href="mailto:info@fortisgroup.ca" style="color:#ACA8A8">info@fortisgroup.ca</a>
                        </div>
                </li>
                <li>
                    <div class="contact-icon">
                    <img src="https://res.cloudinary.com/darkroast-digital/image/upload/v1510152415/fortis/contact-phone.png" draggable="false">
                    </div>
                        <div class="contact-info">
                        <h6>Phone</h6>
                        +1 519-419-7828
                        </div>
                </li>
                <li>
                    <div class="contact-icon">
                    <img src="https://res.cloudinary.com/darkroast-digital/image/upload/v1510152415/fortis/contact-fax.png" draggable="false">
                    </div>
                        <div class="contact-info">
                        <h6>Fax</h6>
                        +1 519-419-7830
                        </div>
                </li>
                <li>
                    <div class="contact-icon">
                    <img src="https://res.cloudinary.com/darkroast-digital/image/upload/v1510152415/fortis/contact-address.png" draggable="false">
                    </div>
                        <div class="contact-info">
                        <h6>Location</h6>
                        3070 Jefferson Blvd, Windsor, ON N8T 3G9, Canada
                        </div>
                </li>
            </ul>
        </aside>
        <article id="map">
            
        </article>
    </div>

</section>

    <div class="hp-contact contact-contact">
        <div class="hp-contact-content">
            <h2 class="is-hidden">Contact Us</h2>
            <section class="hp-form is-hidden">
                                        <form class="form" action="<?php echo $page->url()?>#form" method="post">

    <div class="form-row">
    
            <div class="form-group">
                <label for="name" class="required">Name</label>
                <input<?php e($form->hasError('name'), ' class="erroneous"')?> type="text" name="name" id="name" value="<?php $form->echoValue('name') ?>" required/>
            </div>

            <div class="form-group">
                <label for="email" class="required">E-Mail</label>
                <input<?php e($form->hasError('_from'), ' class="erroneous"')?> type="email" name="_from" id="email" value="<?php $form->echoValue('_from') ?>" required/>
            </div>
    </div>

    <div class="form-row">
            <div class="form-group">
                <label for="subject" class="required">Phone Number</label>
                <input<?php e($form->hasError('phone'), ' class="erroneous"')?> type="text" name="phone" id="phone" value="<?php $form->echoValue('phone') ?>" required/>
            </div>

            <div class="form-group">
                <label for="subject" class="required">Topic</label>
                <input<?php e($form->hasError('subject'), ' class="erroneous"')?> type="text" name="subject" id="subject" value="<?php $form->echoValue('subject') ?>" required/>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group is--textarea">
                <label for="message">Message</label>
                <textarea name="message" id="message"><?php $form->echoValue('message') ?></textarea>
            </div>
        </div>

    <a name="form"></a>
<?php if ($form->hasMessage()): ?>
    <div class="message <?php e($form->successful(), 'success' , 'error')?>">
        <?php $form->echoMessage() ?>
    </div>
<?php endif; ?>

    <button class="submit" type="submit" name="_submit" value="<?php echo $form->token() ?>"<?php e($form->successful(), ' disabled')?>>Submit</button>

</form>
            </section>
        </div>
        <div class="hp-contact-background is-hidden"></div>
    </div>

    <!-- End Contact -->

</main>

<!-- End Main -->


<?php snippet('footer') ?>

</div>

</div>
</div>