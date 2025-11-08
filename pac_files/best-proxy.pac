function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.222.195.4:1111",
        "SOCKS 152.53.171.242:45589",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 60.249.94.59:3128",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 157.180.121.252:14465",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 71.168.71.12:8889",
        "SOCKS 152.53.171.242:10073",
        "SOCKS 152.53.36.101:54079",
        "SOCKS 157.180.121.252:59415",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 152.53.36.101:15771",
        "SOCKS 37.221.193.221:30950",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 37.221.193.221:38909",
        "SOCKS 157.180.121.252:48297",
        "SOCKS 51.48.124.225:4949",
        "SOCKS 51.89.68.78:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}