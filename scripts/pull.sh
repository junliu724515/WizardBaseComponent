#!/bin/bash
source ./scripts/source_env.sh
if [ -z $sfdc_username ]; then
    
    read -p "Enter Your Username: "  username

	if [ -z $username ]; then
	    printf "\n"
	    echo "No Username supplied"
	    exit 1
	fi
	export sfdc_username=$username
fi

if [ -z $sfdc_pass_and_token ]; then

	read -s -p "Enter Your Password: "  password

	if [ -z $password ]; then
	    printf "\n"
	    echo "No Password supplied"
	    exit 1
	fi
	export sfdc_pass_and_token=$password
fi

printf "\n"
ant -f CI/build.xml pull