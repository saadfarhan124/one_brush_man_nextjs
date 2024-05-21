from google.cloud import storage

def main(bucket_name='website_images_obm'):
    # The string for the URL
    url = 'https://storage.googleapis.com/'
    
    # Creates a client
    storage_client = storage.Client()
    
    def list_files():
        # Lists files in the bucket
        blobs = storage_client.list_blobs(bucket_name)
        
        print('URLs:')
        for blob in blobs:
            print(f"'{url}{bucket_name}/{blob.name}',")
    
    try:
        list_files()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
