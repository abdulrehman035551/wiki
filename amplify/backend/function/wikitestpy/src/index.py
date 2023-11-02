import json
import requests


def handler(event, context):
    # Add CORS headers to the response
    headers = {
        'Access-Control-Allow-Origin': '*',  # Allow requests from any origin
        'Access-Control-Allow-Methods': '*',  # Allow specified methods
        'Access-Control-Allow-Headers': 'Content-Type',  # Allow Content-Type header
    }
    try:
        body = json.loads(event['body'])
        print('body:', body)
        api_url = 'https://en.wikipedia.org/w/api.php'
        search_query = body.get('wikiTitle')

        params = {
            'action': 'query',
            'list': 'search',
            'srsearch': search_query,
            'format': 'json',
        }

        response = requests.get(api_url, params=params)
        response.raise_for_status()  # Raise an HTTPError for bad responses (4xx and 5xx status codes)
        data = response.json()
        print('Data from Wikipedia API:', data)

        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({
                'message': 'Your Wikipedia data',
                'data': data,
            }),
        }
    except requests.exceptions.HTTPError as err:
        print('HTTP error occurred:', err)
        return {
            'statusCode': 500,
            'headers': headers,  # Include CORS headers in the error response
            'body': json.dumps({
                'message': 'Internal Server Error',
            }),
        }
    except Exception as e:
        print('Error occurred:', e)
        return {
            'statusCode': 500,
            'headers': headers,  # Include CORS headers in the error response
            'body': json.dumps({
                'message': 'Internal Server Error',
            }),
        }