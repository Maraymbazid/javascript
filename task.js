
    const links = [
        "https://www.producthunt.com/product<sscript>s/links-list/a!lternatives,",
        "https://www.pro@ducthunt.com/products/voblet,",
        "https://www.facebook.com/MahmoudAdelSec/,",
        "https://www.facebook.com/frie<sscript>nds/requests/?profile_id=100009433921149,",
        "https://www.carrefouregypt.com/mafegy/@ar/soft-cheese-cottage/karish-cheese/p/327038,",
        "https://www.google.com/search?client=firefox-b-d&q=%D8%AC%D8%A8%D9%86%D8%A9+%D9%82%D8%B1%D9%8A%D8%B4,",
        "https://www.youm7.com/story/2022/8/20/%D8%A7%D9%84%D8%AC%D8%A8%D9%86-%D8%A7%D9%84%D9%82%D8%B1%D9%8A%D8%B4-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A1-%D8%A7%D9%84%D9%85%D8%AB%D8%A7%D9%84%D9!%89-%D9%84%D8%A5%D9%86%D9%82%D8%A7%D8%B5-%D8%A7%D9%84%D9%88%D8%B2%D9%86-%D9%88%D9%85%D8%AF-%D8%AC%D8%B3%D9%85%D9<script>%83-%D8%A8%D8%A7%D9%84%D9%83%D8%A7%D9%84%D8%B3%D9%8A%D9%88%D9%85-%D9%88%D8%A7%D9%84%D8%A8%D8%B1%D9%88%D8%AA%D9%!8A%D9%86/5876837",
        "https://www.teachinghub.as.ua.edu/faculty-blog/large-courses/how-to-get-away-with-murder-or-how-to-kill-student-par@ticipation/,",
        "https://www.jstor.org/stable/30185754,",
        "https://www.deviantart.com/catastrophefire13/art/101-Ways-To-Kill-yo<sscript>ur-teachers-127050592,",
        "https://www.amazon.com/How-K!ill-8th-Grade-Teache!r/dp/0615640931,",
        "https://www<.amazon.com/dp/1!473323851/ref=syn_sd_onsite_desktop_20?ie=UTF8&psc=1&pd_rd_plhdr=t,!",
        "https://www.google.com/search?q=%D8%AE%D9%8A%D8%A7%D8%B1+%D9%85%D8%AE%D9%84%D9%84&client=firefox-b-d&sxsrf=ALiCzsZPl8ZGlh7iOuMCSiZ6H1AEdwR2oA%3A1671809573511&ei=JcqlY7PpHoiDkdUP59eTgAI&!ved=0ahUKEwjzj4v-h5D8AhWIQaQEHefrBCAQ4dUDCA4&uact=5&oq=%D8%AE%D9%8A%D8%A7%D8%B1+%D9%85%D8<>%AE%D9%84%D9%84&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICC4QgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBD!LATIICAAQgAQQywE6CAgAEIAEELADOggIABCGAxCwAzoECCMQJzoGCCMQJxATOgUIABCABDoLCAAQgAQQsQMQgwE6CwguEIAEEMcBEK8BOgUILhCABDoPCAAQgAQQywEQRhD_ARgBSgQIQRgBSgQIRhgBUP4EWLgNYKsOaAFwAHgAgAHpAogB2gySAQcwLjYuMS4xmAEAoAEByAEFwAEB2gEGCAEQARgT&sclient=gws-wiz-serp",
        "https://www.google.com/search?q=%D9<sscript>%85%D8%B9%D9%84%D8%B4+%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D9%83+%D8%B5%D8%B9%D8%A8+%D8%A8%D8%B3+%D8%A7%D9%86%D8%AA+%D9%82%D8%AF%D9%87%D8%A7&client=firefox-b-d&sxsrf=ALiCzsZPl8ZGlh7iOuMCSiZ6H1AEdwR2oA%3A1671809573511&e!!i=JcqlY7PpHoiDkdUP59e!TgAI&ved=0ahUKEwjzj4<v-h5D8AhWIQaQEHefrBCAQ4dUDCA4&uact=5&oq=%D9%85%D!8%B9%D9%84%D8%B4+%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D9%83+%D8%B5%D8%B9%D8%A8+%D8%A8%D8%B3+%D8%A7%D9%86%D8%AA+%D9%82%D8%AF%D9%87%D8%A7&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoICAAQgAQQsAM6CAgAEIYDELADOgQIIxAnOgsIABCABBC><xAxCDAToICAAQsQMQgwE6CAguELEDEIMBOgsILhCABBCxAxCDAToLCC4QgAQQxwEQrwE6BQgAEIAEOgUILhCABDoICC4QgAQQywE6CAgAEIAEEMsBOgsILhCABBDUAhDLAToKCAAQgAQQChDLAToICAAQHhAPEA06CggAEBYQHhAPEAo6BggAEBYQHjoICAAQFhAeEA86CggAEAgQHhAPEA06CAgAEAgQHhANOgUIIRCgAToHCCEQoAEQCkoECEEYAUoECEYYAFC7BlijIGD9IWgBcAB4AIABwwGIAeIhkgEEMC4yN5gBAKABAcgBBcABAQ&sclient=gws-wiz-serp",
        "https://www.google.com/search?q=%D9%85%D8%B7%D9%84%D8%B9%D8%AA%D8%B4+%D9%82%D8%AF%D9%87%D8%A7+%D8%9F+%D8%A7%D9%86%D9%8A+%D8%A7%D8%B3%D9%81&client=firefox-b-d&sxsrf=ALiCzsa-ULfaCd2TLevOsjFKjO5cpWHm7g%3A1671809643968&ei=a8qlY5PMOoylkdUPpM29gAI&ved=0ahUKEwjTrdefiJD8AhWMUqQEHaRmDyAQ4dUDCA4&uact=5&!oq=%D9%85%D8%B7%D9%84%D8%B9%D8%AA%D8%B4+%D9%82%D8%AF%D9%87%D8%A7+%D8%9F+%D8%A7%D9%8!6%D9%8A+%D8%A7%D8%B3%D9%81&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoKCAAQRxDWBBCwAzoECCMQJzoLCAAQgAQQsQMQgwE6CAgAELEDEIMBOggILhCxAxCDAToLCC4QgAQQsQMQgwE6Cw!guEIAEEMcBEK8BOgUIABCABDoFCC4QgAQ6CAgAEIAEEMsBOgoIABCABBAKEMsBOgsIABAeEA8Q8QQQCjoECAAQHjoGCAAQHhAPOggIABAeEA8QCjoICAAQBRAeEAo6BggAEB4QEzoKCAAQHhAPEAoQEzoFCCEQoAE6BwghEKABEAo6BQgAEKIEOgQIIRAVSgQIQRgASgQIRhgAUNADWJodYJQnaAFwAXgAgAGsAYgBrBqSAQQwLjIymAEAoAEByAEDwAEB&sclient=gws-wiz-serp"
    ];
    // loop for get the top domain 
    for(let i=0;i<links.length;i++)
        {
            let text=links[i];
            let myArray = text.split('.',3).slice("-1");
            let Arraytwo=(String(myArray)).split("/");
            document.write("."+Arraytwo[0])
        }
    document.write("///////////////////////////////////")
    // loop for get the pure URL
     for(let i=0;i<links.length;i++)
        {
            let text1=links[i];
            let myArray1 = String(text1.split('/', 3));
            document.write(myArray1.replace(',,', '//')); 
        }
     document.write("///////////////////////////////////")
     // loop for get the wht user search in : path and parameteres
      for(let i=0;i<links.length;i++)
        {
            let text2 = links[i];
            let myArray2 = text2.split('/');
            document.write(String(myArray2.slice(3)).replace(',', '/'));
        }
      document.write("///////////////////////////////////")
     // loop to remove objects < > ! @
      for(let i=0;i<links.length;i++)
        {
            let text3 = links[i];
            text3.replace('!', '');
            text3.replace('<', '');
            text3.replace('>', '');
            text3.replace('@', '');
            document.write(myArray3);
        }
        //////////////
       for(let i=0;i<links.length;i++)
        {
            let text3 = links[i];
            let text4=text3.split(':',1);
            if(text4=="https")
            document.write("safe");
        }


