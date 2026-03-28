function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 80.253.246.238:6618",
        "SOCKS 38.145.203.96:8443",
        "SOCKS 38.145.203.110:8443",
        "SOCKS 45.136.130.180:8443",
        "SOCKS 38.34.179.35:8443",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 45.136.130.188:8449",
        "SOCKS 103.113.70.189:1081",
        "SOCKS 38.34.179.175:8443",
        "SOCKS 38.145.220.81:8443",
        "SOCKS 38.34.179.69:8443",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 206.123.156.185:4791",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 206.123.156.228:5716",
        "SOCKS 38.34.179.156:8447",
        "SOCKS 45.136.130.246:8443",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 38.34.179.40:8446",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}