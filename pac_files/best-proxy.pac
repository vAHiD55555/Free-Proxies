function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.7.252.165:3256",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 103.220.23.211:8080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 150.227.4.147:1080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 216.122.181.249:8080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 103.132.52.32:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}