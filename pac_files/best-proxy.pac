function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.51:5719",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 103.28.121.58:80",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 43.209.8.12:93",
        "SOCKS 159.8.114.37:80",
        "SOCKS 72.10.160.91:9959",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 120.77.203.0:443",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 188.165.233.121:9151",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}