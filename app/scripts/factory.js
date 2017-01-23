angular.module('confusionApp').factory('team', function () {
            return [{
                name: 'Karan'
                , image: 'images/karan.png'
                , email: 'karan.jariwala@cerner.com'
                , track: ['data', 'clinical']
                , ManagersEmail: 'sharath.huruli@cerner.com'
                , nextWeeksAvail: 20
                , quartersAvail: 300
                , designation: 'System Engineer'
                , interfaces: [{
                        name: 'AP History Upload'
                        , description: 'Uploading AP data'
                        , category: ['data', 'clinical']
                        , status: 'ongoing'
                        , clients: ['Chsi Scranton', 'Chsi Southside', 'Chsi Oro-valley', 'Chsi Northwest', 'Chsi Gadsden', 'chsi Porter', 'Chsi Vista', 'Chsi Gateway', 'Chsi Pottstown', 'Mission Health MSJH']
            }, {
                        name: 'Blood Bank History Upload'
                        , description: 'Uploading Blood bank data includes uploading Patient data, Products and Transfusions'
                        , category: ['data', 'clinical']
                        , status: 'ongoing'
                        , clients: ['Chsi Porter', 'Chsi Trinity']
                    , }, {
                        name: 'CCD Interfaces'
                        , description: 'Interface for Creating Continutiy of Care document outbound'
                        , category: ['clinical']
                        , status: 'ongoing'
                        , clients: ['Dignity Health CCD', 'Huntington CCD HMH_CA', 'United Surgical Partners International USP_TX']
            }, {
                        name: 'ADT/ORU interface'
                        , description: 'Creating Outbound ADT interface'
                        , category: ['clinical']
                        , status: 'ongoing'
                        , clients: ['Delano Regional Medical Center DRMC_CA']
            },

                    {
                        name: 'Accounts Payable AP'
                        , description: 'Accounts Payable Bidirectional'
                        , category: ['financial']
                        , status: 'completed'
                        , clients: ['San Antonio SACH']
            }
        ]
    }, {
                name: 'Akash'
                , image: 'images/akash.png'
                , email: 'Akash.Verma@cerner.com'
                , track: ['financial']
                , ManagersEmail: 'sharath.huruli@cerner.com'
                , nextWeeksAvail: '40'
                , quartersAvail: '300'
                , designation: 'System Engineer'
                , interfaces: [{
                        name: '837 I/P'
                        , description: 'Outbound Claims'
                        , category: ['financial']
                        , status: 'ongoing'
                        , clients: ['WTHC_TN (Ambulatory)', 'WTHC_TN (Acute)']
            }, {
                        name: '835'
                        , description: 'Payer Payment'
                        , category: ['financial']
                        , status: 'ongoing'
                        , clients: ['WTHC_TN (Ambulatory)', 'WTHC_TN (Acute)']
                    , }, {
                        name: 'General Ledger'
                        , description: 'General Ledger outbound'
                        , category: ['financial']
                        , status: 'ongoing'
                        , clients: ['WTHC_TN (Ambulatory)', 'WTHC_TN (Acute)']
            }, {
                        name: 'External Date/Time'
                        , description: 'External Date/Time Outbound'
                        , category: ['financial']
                        , status: 'ongoing'
                        , clients: ['WTHC_TN (Ambulatory)', 'WTHC_TN (Acute)']
            },

                    {
                        name: 'Accounts Payable AP'
                        , description: 'Accounts Payable Bidirectional'
                        , category: ['financial']
                        , status: 'ongoing'
                        , clients: ['WTHC_TN (Ambulatory)', 'WTHC_TN (Acute)']
            }
                    , {
                        name: 'Collections'
                        , description: 'New Buisness, Payment-Adjustment and  Return Reasons'
                        , category: ['financial']
                        , status: 'ongoing'
                        , clients: ['WTHC_TN (Ambulatory)', 'WTHC_TN (Acute)']
            }
                    , {
                        name: 'Lockbox'
                        , description: 'Patient Payment'
                        , category: ['financial']
                        , status: 'ongoing'
                        , clients: ['WTHC_TN (Ambulatory)', 'WTHC_TN (Acute)']
            }
        ]
    }, {
                name: 'Neha'
                , image: 'images/neha.png'
                , email: 'Neha.Singh@cerner.com'
                , track: ['financial']
                , ManagersEmail: 'sharath.huruli@cerner.com'
                , nextWeeksAvail: '40'
                , quartersAvail: '300'
                , designation: 'System Engineer'
                , interfaces: [{
                        name: '835 Remittance '
                        , description: 'Payer Payment Interface'
                        , category: ['financial']
                        , status: 'ongoing'
                        , clients: ['NAH_AZ,SHEL_VA,EHS_IL']
            }, {
                        name: '837 I/P claims'
                        , description: 'Outbound Claims'
                        , category: ['financial']
                        , status: 'ongoing'
                        , clients: ['NAH_AZ,SHEL_VA,EHS_IL']
            }, {
                        name: 'Lockbox'
                        , description: 'Patient Payment'
                        , category: ['financial']
                        , status: 'ongoing'
                        , clients: ['NAH_AZ,SHEL_VA,EHS_IL']
            }, {
                        name: 'External Dt Time'
                        , description: 'External/transmit Date Time '
                        , category: ['financial']
                        , status: 'ongoing'
                        , clients: ['NAH_AZ,SHEL_VA,EHS_IL']
            },

                    {
                        name: 'Encounter Notes'
                        , description: 'Encounter notes Outbound '
                        , category: ['financial']
                        , status: 'completed'
                        , clients: ['NAH_AZ,SHEL_VA,EHS_IL']
            }
            , {
                        name: 'AP and GL'
                        , description: 'Accounts Payable Bidirectional and General Ledger Outbound'
                        , category: ['financial']
                        , status: 'completed'
                        , clients: ['NAH_AZ,SHEL_VA,EHS_IL']
            }
            , {
                        name: 'Collections'
                        , description: 'New Buisness, Payment-Adjustment and  Return Reasons'
                        , category: ['financial']
                        , status: 'completed'
                        , clients: ['NAH_AZ,SHEL_VA,EHS_IL']
            }
        ]
    }, {
                name: 'Archit'
                , image: 'images/archit.png'
                , email: 'Archit.Gupta@cerner.com'
                , track: ['data', 'clinical', 'financial']
                , ManagersEmail: 'sharath.huruli@cerner.com'
                , nextWeeksAvail: '40'
                , quartersAvail: '300'
                , designation: 'System Engineer'
                , interfaces: [{
                        name: 'Item Master & Supply Usage'
                        , description: 'Supply Chain Interfaces'
                        , category: ['clinical']
                        , status: 'completed'
                        , clients: ['Holy Family Memorial Hospital']
            }, {
                        name: 'Image Migration'
                        , description: 'Uploading historical images'
                        , category: ['data', 'clinical']
                        , status: 'ongoing'
                        , clients: ['BEHS_IN', 'THC_TX']
                    , }, {
                        name: '835 Remittance'
                        , description: 'Interface for payer payments coming inbound'
                        , category: ['financial']
                        , status: 'ongoing'
                        , clients: ['Adventist Health']
            }, {
                        name: 'AP Outbound/Inbound'
                        , description: 'Accounts payable interfaces - outbound and inbound'
                        , category: ['financial']
                        , status: 'ongoing'
                        , clients: ['Adventist Health']
            },

                    {
                        name: 'Collections/Pre-collections new business and payment adjustment'
                        , description: 'Bidirectional cnb/cpa interfaces'
                        , category: ['financial']
                        , status: 'completed'
                        , clients: ['Adventist Health']
            }
            , {
                        name: 'Lockbox'
                        , description: 'Patient payment inbound interface'
                        , category: ['financial']
                        , status: 'completed'
                        , clients: ['Adventist Health']
            }
            , {
                        name: 'ADT/ORU interface'
                        , description: 'Creating Outbound ADT interface'
                        , category: ['clinical']
                        , status: 'ongoing'
                        , clients: ['Holy Family Memorial Hospital']
            }]
    }, {
                name: 'Rahul'
                , image: 'images/rahul.png'
                , email: 'Rahul.Sawhney@cerner.com'
                , track: ['clinical', 'bridge', 'financial']
                , ManagersEmail: 'sharath.huruli@cerner.com'
                , nextWeeksAvail: '40'
                , quartersAvail: '300'
                , designation: 'System Engineer'
                , interfaces: [{
                    name: 'CCD Interfaces'
                    , description: 'Interface for Creating Continutiy of Care document Outbound'
                    , category: ['clinical']
                    , status: 'Ongoing'
                    , clients: ['LAC_CA - Los Angeles County Department of Health Services']
            }, {
                    name: 'Historical Uploads'
                    , description: 'Inbound Interfaces for Blood Bank,AP,RadNet Hx Uploads'
                    , category: ['data']
                    , status: 'Ongoing'
                    , clients: ['THCH_TX - Tenet HealthSystem Medical']
            }, {
                    name: '835 Remittance Inbound'
                    , description: 'Inbound Remittances Interface'
                    , category: ['financial']
                    , status: 'Ongoing'
                    , clients: ['BART_IN - Columbus Regional Hospital', 'CPTL_NH - Capital Region Helathcare', 'MHSY_IL - Memorial Health System']
            }, {
                    name: 'Encounter Comments Inbound'
                    , description: 'Encounter Comments Inbound Interface for Encounter Notes'
                    , category: ['financial']
                    , status: 'Ongoing'
                    , clients: ['WYOM_WY - Wyoming Support Specialist']
            }, {
                    name: 'Contract Management Inbound'
                    , description: 'Cerner Contract Management Inbound Interface'
                    , category: ['financial']
                    , status: 'Ongoing'
                    , clients: ['NMHS_NE - Nebraska Methodist Hospital', 'CPTL_NH - Capital Region Helathcare', 'MHSY_IL - Memorial Health System']
            }, {
                    name: 'Claims Outbound'
                    , description: '837i/p Claims Outbound Interface'
                    , category: ['financial']
                    , status: 'Ongoing'
                    , clients: ['CPTL_NH - Capital Region Helathcare', 'MHSY_IL - Memorial Health System']
            }, {
                    name: 'Collection New Business Bidirectional'
                    , description: 'Collection New Business/Collection Payment Adjustment Outbound files to Collection and Pre-Collection Agency and Collection Payment Adjustment Inbound files'
                    , category: ['financial']
                    , status: 'Ongoing'
                    , clients: ['BH_AL - Baptist Health', 'CPTL_NH - Capital Region Helathcare', 'MHSY_IL - Memorial Health System']
            }, {
                    name: 'AP Refunds Bidirectional'
                    , description: 'AP Refunds Outbound Interface and AP Refunds Receipt Inbound Interface'
                    , category: ['financial']
                    , status: 'Ongoing'
                    , clients: ['CPTL_NH - Capital Region Helathcare', 'MHSY_IL - Memorial Health System']
            }, {
                    name: 'General Ledger Outbound'
                    , description: 'Patient Accounting files to non-Cerner Financial System'
                    , category: ['financial']
                    , status: 'Ongoing'
                    , clients: ['CPTL_NH - Capital Region Helathcare', 'MHSY_IL - Memorial Health System']
            }, {
                    name: 'Statements Outbound'
                    , description: 'Patient Statements Outbound file'
                    , category: ['financial']
                    , status: 'Ongoing'
                    , clients: ['CPTL_NH - Capital Region Helathcare', 'MHSY_IL - Memorial Health System']
            }, {
                    name: 'ADT Interfaces Outbound'
                    , description: 'ADTs to Bridge/Pass Through ADTs in case of 3rd Party Registration'
                    , category: ['bridge']
                    , status: 'Ongoing'
                    , clients: ['LOWE_MA - Lowell General Hospital', 'MAH_VT - Mount Ascutney Hospital', 'CHLD_MO - Children’s Mercy Hospitals and Clinics', 'ATLN_NJ - AtlantiCare Health System', 'BOON_NE - Boone County Health Center', 'MHSY_IL - Memorial Health System', 'CPTL_NH - Capital Region Helathcare', 'MLLA_CA - Martin Luther King, Jr. Community Hospital', 'BMC_DE - Beebee Healthcare']
            }, {
                    name: 'Lab Results Outbound'
                    , description: 'ORUs - Lab Results Outbound'
                    , category: ['bridge']
                    , status: 'Ongoing'
                    , clients: ['CHLD_MO - Children’s Mercy Hospitals and Clinics', 'ATLN_NJ - AtlantiCare Health System', 'BMC_DE - Beebee Healthcare', 'MLLA_CA - Martin Luther King, Jr. Community Hospital', 'CPTL_NH - Capital Region Helathcare']
            }, {
                    name: 'Specimen and Feeding Orders Outbound'
                    , description: 'ORMs - Specimen and Feeding Orders Outbound'
                    , category: ['bridge']
                    , status: 'Ongoing'
                    , clients: ['CPTL_NH - Capital Region Helathcare', 'CHLD_WA - Seattle Children'
                        s Hospital ']
                    }
                    , {
                        name: 'Transfusion Results Inbound'
                        , description: 'ORUs - Transfusion Results Inbound'
                        , category: ['Bridge']
                        , status: 'Ongoing'
                        , clients: ['LOWE_MA - Lowell General Hospital', 'MAH_VT - Mount Ascutney Hospital', 'WIRRH_UK - Wirral Hospital, United Kingdom', 'CHLD_MO - Children’s Mercy Hospitals and Clinics', 'ATLN_NJ - AtlantiCare Health System', 'BOON_NE - Boone County Health Center', 'MHSY_IL - Memorial Health System', 'CHLD_WA - Seattle Children'
                            s Hospital ','
                            CPTL_NH - Capital Region Helathcare ','
                            MLLA_CA - Martin Luther King, Jr.Community Hospital ','
                            BMC_DE - Beebee Healthcare ']
                        }
                        , {
                            name: 'Blood Status Inbound'
                            , description: 'BTS - Blood Status Inbound from Bridge'
                            , category: ['Bridge']
                            , status: 'Ongoing'
                            , clients: ['BMC_DE - Beebee Healthcare', 'ATLN_NJ - AtlantiCare Health System', 'MLLA_CA - Martin Luther King, Jr. Community Hospital']
                        }
                        , {
                            name: 'Specimen Order Status Inbound'
                            , description: 'Specimen Order Status Inbound from Bridge'
                            , category: ['Bridge']
                            , status: 'Ongoing'
                            , clients: ['CPTL_NH - Capital Region Helathcare']
                        }
                        , ]
    }, {
                    name: 'Sharath'
                    , image: 'images/sharath.png'
                    , email: 'Sharath.Huruli@cerner.com'
                    , track: ['data', 'clinical']
                    , ManagersEmail: 'sharath.huruli@cerner.com'
                    , nextWeeksAvail: '40'
                    , quartersAvail: '300'
                    , designation: 'Team Lead'
                    , interfaces: [{}]
    }, {
                    name: 'Niru'
                    , image: 'images/niru.png'
                    , email: 'Niru.Kumari@cerner.com'
                    , track: ['financial', 'bridge']
                    , ManagersEmail: 'sharath.huruli@cerner.com'
                    , nextWeeksAvail: '40'
                    , quartersAvail: '300'
                    , designation: 'System Engineer'
                    , interfaces: [{
                            name: '835 Remittance '
                            , description: 'Payer Payment Interface'
                            , category: ['financial']
                            , status: 'ongoing'
                            , clients: ['HLQT']
            }, {
                            name: '837 I/P claims'
                            , description: 'Outbound Claims'
                            , category: ['financial']
                            , status: 'ongoing'
                            , clients: ['HLQT']
            }, {
                            name: 'Lockbox'
                            , description: 'Patient Payment'
                            , category: ['financial']
                            , status: 'ongoing'
                            , clients: ['HLQT']
            }, {
                            name: 'External Dt Time'
                            , description: 'External/transmit Date Time '
                            , category: ['financial']
                            , status: 'ongoing'
                            , clients: ['HLQT']
            },

                        {
                            name: 'Encounter Notes'
                            , description: 'Encounter notes Outbound '
                            , category: ['financial']
                            , status: 'completed'
                            , clients: ['HLQT']
            }
            , {
                            name: 'AP and GL'
                            , description: 'Accounts Payable Bidirectional and General Ledger Outbound'
                            , category: ['financial']
                            , status: 'completed'
                            , clients: ['HLQT']
            }
            , {
                            name: 'Collections'
                            , description: 'New Buisness, Payment-Adjustment and  Return Reasons'
                            , category: ['financial']
                            , status: 'completed'
                            , clients: ['HLQT']
            }
        ]
    }];
});