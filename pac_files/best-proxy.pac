function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.163:4083",
        "SOCKS 62.60.231.71:56608",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 36.255.98.160:6115",
        "SOCKS 62.60.131.204:7799",
        "SOCKS 62.60.131.204:5306",
        "SOCKS 62.60.131.253:4116",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 210.75.240.178:4781",
        "SOCKS 62.60.131.204:4642",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 62.60.131.205:6139",
        "SOCKS 36.255.98.176:4778",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 113.192.12.177:8080",
        "SOCKS 36.255.98.169:4938",
        "SOCKS 128.140.113.110:8081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}