// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
var tabIndex=0;
function genericOnClick(info, tab) {
var to = JSON.stringify(info.linkUrl);
  to = to.slice(to.indexOf("mailto:")+7, to.length-1);

  if(to.indexOf("@")>0)
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to='+to,'_newtab'+tabIndex++);
  //'&su=SUBJECT&body=BODY'
}

// Create one test item for each context type.
var context = "link";
var title = "Open using Gmail";
var id = chrome.contextMenus.create({"title": title, "contexts":[context], "onclick": genericOnClick});