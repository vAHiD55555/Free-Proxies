function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.80.1:9090",
        "SOCKS 20.169.214.248:3128",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 72.10.160.93:10959",
        "SOCKS 8.213.215.187:5060",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 89.58.45.94:10027",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 3.107.252.199:45157",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 89.58.45.94:17047",
        "SOCKS 103.191.218.119:8199",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 89.58.45.94:10521",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 123.128.12.93:9055",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}