/*
 * (C) Copyright 2015 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 */

(function (document) {
  'use strict';

  var TASKS = {
    'create': 'Task7c8'
  };

  var app = document.querySelector('#app');
  app.selectedTab = 0;
  app.task = null;

  app.toolbarTitle = function (task) {
    return task ? task.name : 'Direct Deposit Request';
  };
  app.toolbarIcon = function (task) {
    return task ? 'arrow-back' : 'menu';
  };
  app.back = function () {
    app.task = null;
  };
  app.refresh = function () {
    location.reload();
  };

  app.isStep = function (key, task) {
    return task && TASKS[key] === task.nodeName;
  };

  app.isMatch = function (match, value) {
    return match == value;
  };

  HTMLImports.whenReady(function () {
    app.formatDate = Polymer.Base.formatDate = function (str) {
      return (str) ? new Date(str).toLocaleString() : '';
    };

    app.i18n = Polymer.Base.i18n = function (key) {
      return {
        'wf.actors': 'Actors',
        'wf.dueDate': 'Due date',
        'wf.directive': 'Directive,',
        'wf.EMDirectDepositRequest': 'Direct Deposit Request',
        'wf.directDeposit.create': 'New request',
        'wf.directDeposit.validate': 'Validate expense',
        'wf.directDeposit.accountancy': 'Account for expense',
        'wf.directDeposit.submitExpense': 'Submit for validation',
        'wf.directDeposit.customerCode': 'Set customer code',
        'wf.directDeposit.submit': 'Submit',
        'wf.directDeposit.cancel': 'Cancel',
        'wf.directDeposit.done': 'Done',
        'wf.directDeposit.label': 'Label',
        'wf.directDeposit.amount': 'Amount',
        'wf.directDeposit.file': 'File'
      }[key] || key;
    };
  });

})(document);
